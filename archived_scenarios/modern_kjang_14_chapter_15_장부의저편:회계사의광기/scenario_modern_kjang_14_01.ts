export const scenario_modern_kjang_14_01 = {
	"scenario_id": "modern_kjang_14_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "편의점 문이 다시 열렸다. 익숙한 공간은 여전히 평범해 보였다.",
						"english": "The convenience store door reopened. The familiar space still looked ordinary.",
						"japanese": "コンビニのドアが再び開いた。見慣れた空間は依然として普通に見えた。",
						"chinese": "便利店的门再次打开。熟悉的空间看起来仍然很普通。",
						"french": "La porte du supermarché s'est rouverte. L'espace familier semblait toujours ordinaire.",
						"spanish": "La puerta de la tienda de conveniencia se reabrió. El espacio familiar todavía parecía ordinario.",
						"vietnamese": "Cánh cửa cửa hàng tiện lợi lại mở ra. Không gian quen thuộc vẫn trông bình thường.",
						"thai": "ประตูร้านสะดวกซื้อเปิดอีกครั้ง พื้นที่ที่คุ้นเคยยังคงดูธรรมดา",
						"hindi": "सुविधा स्टोर का दरवाजा फिर से खुला। परिचित जगह अभी भी सामान्य दिख रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "분명 여기에도 이상한 점이 있었는데...",
						"english": "There was definitely something strange here too...",
						"japanese": "ここにも何かおかしい点があったはずなのに…",
						"chinese": "这里肯定也有奇怪的地方...",
						"french": "Il y avait clairement quelque chose d'étrange ici aussi...",
						"spanish": "Definitivamente había algo extraño aquí también...",
						"vietnamese": "Rõ ràng ở đây cũng có điều gì đó kỳ lạ...",
						"thai": "แน่นอนว่ามีบางอย่างแปลกๆ ที่นี่ด้วย...",
						"hindi": "यहाँ भी कुछ अजीब था, निश्चित रूप से..."
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						1
					]
				},
				{
					"content": {
						"korean": "...다시 왔네.",
						"english": "...You're back.",
						"japanese": "…また来たね。",
						"chinese": "...你又来了。",
						"french": "...Te revoilà.",
						"spanish": "...Has vuelto.",
						"vietnamese": "...Lại đến rồi.",
						"thai": "...กลับมาอีกแล้ว",
						"hindi": "...तुम वापस आ गए।"
					},
					"speaker": "nia",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "니아? 여기서 뭐 해?",
						"english": "Nia? What are you doing here?",
						"japanese": "ニア？ここで何してるの？",
						"chinese": "妮娅？你在这里做什么？",
						"french": "Nia ? Que fais-tu ici ?",
						"spanish": "¿Nia? ¿Qué haces aquí?",
						"vietnamese": "Nia? Bạn đang làm gì ở đây?",
						"thai": "เนีย? มาทำอะไรที่นี่?",
						"hindi": "निया? तुम यहाँ क्या कर रही हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(K-jang 쪽을 힐끗 보며) 수상한 움직임이 보여서. 그 사람, 뭔가 숨기고 있어.",
						"english": "(Glancing at K-jang) I saw some suspicious movements. He's hiding something.",
						"japanese": "（K-jangの方をちらりと見て）怪しい動きが見えたから。あの人、何か隠してる。",
						"chinese": "（瞥了一眼K-jang）我看到了一些可疑的举动。那个人，藏着什么。",
						"french": "(Jetant un coup d'œil à K-jang) J'ai vu des mouvements suspects. Il cache quelque chose.",
						"spanish": "(Mirando de reojo a K-jang) Vi movimientos sospechosos. Él está escondiendo algo.",
						"vietnamese": "(Liếc nhìn K-jang) Tôi thấy có những cử động đáng ngờ. Anh ta đang giấu giếm điều gì đó.",
						"thai": "(เหลือบมอง K-jang) ฉันเห็นความเคลื่อนไหวที่น่าสงสัย เขาซ่อนอะไรบางอย่างอยู่",
						"hindi": "(के-जांग की ओर एक नज़र डालते हुए) मैंने कुछ संदिग्ध हरकतें देखीं। वह कुछ छिपा रहा है।"
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "선반 뒤편, 숨겨진 공간에서 낡은 장부가 발견되었다. 펜으로 꼼꼼히 쓰인 숫자들이 눈에 들어왔다.",
						"english": "Behind the shelf, in a hidden space, an old ledger was found. Carefully written numbers in pen caught my eye.",
						"japanese": "棚の裏、隠された空間で古い帳簿が発見された。ペンで几帳面に書かれた数字が目に入った。",
						"chinese": "在货架后面，一个隐藏的空间里，发现了一本旧账本。钢笔仔细书写的数字映入眼帘。",
						"french": "Derrière l'étagère, dans un espace caché, un vieux registre fut découvert. Des chiffres méticuleusement écrits à l'encre attirèrent mon regard.",
						"spanish": "Detrás del estante, en un espacio oculto, se encontró un viejo libro de contabilidad. Los números cuidadosamente escritos con pluma me llamaron la atención.",
						"vietnamese": "Phía sau kệ, trong một không gian ẩn, một cuốn sổ cái cũ được tìm thấy. Những con số được viết cẩn thận bằng bút máy đập vào mắt tôi.",
						"thai": "ด้านหลังชั้นวางของ ในพื้นที่ซ่อนเร้น พบสมุดบัญชีเก่าเล่มหนึ่ง ตัวเลขที่เขียนด้วยปากกาอย่างประณีตสะดุดตา",
						"hindi": "शेल्फ के पीछे, एक छिपी हुई जगह में, एक पुराना खाता-बही मिला। कलम से सावधानीपूर्वक लिखे गए अंक मेरी आँखों में आ गए।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게 뭐야? 재고표랑 전혀 달라. 이 장부... K-jang 거야?",
						"english": "What is this? It's completely different from the inventory list. This ledger... is it K-jang's?",
						"japanese": "これ何だ？在庫リストと全然違う。この帳簿…K-jangのか？",
						"chinese": "这是什么？和库存清单完全不同。这本账簿……是K-jang的吗？",
						"french": "Qu'est-ce que c'est ? C'est totalement différent de la liste d'inventaire. Ce registre... est-ce celui de K-jang ?",
						"spanish": "¿Qué es esto? Es completamente diferente del inventario. Este libro de contabilidad... ¿es de K-jang?",
						"vietnamese": "Cái gì đây? Khác hoàn toàn với danh sách tồn kho. Cuốn sổ này... là của K-jang sao?",
						"thai": "นี่มันอะไรกัน? ไม่ตรงกับรายการสินค้าในสต็อกเลย บัญชีเล่มนี้... เป็นของ K-jang รึเปล่า?",
						"hindi": "यह क्या है? इन्वेंट्री सूची से बिल्कुल अलग है। यह बहीखाता... K-jang का है?"
					}
				},
				{
					"speaker": "nia",
					"action": "enter",
					"spot": [
						2,
						1
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "드디어 찾았구나. 내가 말했지? 그 장부, '삼일회'랑 연결되어 있어.",
						"english": "You finally found it. Didn't I tell you? That ledger is connected to 'Samilhoe'.",
						"japanese": "ついに見つけたな。言っただろ？その帳簿、『三日会』と繋がってるって。",
						"chinese": "你终于找到了。我没说错吧？那本账簿和‘三日会’有联系。",
						"french": "Tu l'as enfin trouvé. Je te l'avais dit, n'est-ce pas ? Ce registre est lié à 'Samilhoe'.",
						"spanish": "Finalmente lo encontraste. ¿No te lo dije? Ese libro de contabilidad está conectado con 'Samilhoe'.",
						"vietnamese": "Cuối cùng cũng tìm thấy rồi. Tôi đã nói rồi mà? Cuốn sổ đó có liên quan đến 'Samilhoe'.",
						"thai": "ในที่สุดก็เจอแล้ว! ฉันบอกแล้วใช่มั้ย? บัญชีเล่มนั้นเชื่อมโยงกับ 'Samilhoe' น่ะ",
						"hindi": "आखिरकार तुम्हें मिल ही गया। मैंने तुमसे कहा था ना? वह बहीखाता 'समीलहोए' से जुड़ा है।"
					},
					"speaker": "nia",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "'삼일회'?",
						"english": "'Samilhoe'?",
						"japanese": "『三日会』？",
						"chinese": "‘三日会’？",
						"french": "'Samilhoe' ?",
						"spanish": "¿'Samilhoe'?",
						"vietnamese": "'Samilhoe'?",
						"thai": "'Samilhoe'?",
						"hindi": "'समीलहोए'?"
					}
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "이 재고 불일치... 전부 그들의 불법 자금을 위장하려는 수법이야. 이 숫자들이 위험한 이유야. 빨리 도망쳐야 해!",
						"english": "This inventory discrepancy... it's all a ploy to disguise their illegal funds. That's why these numbers are dangerous. We need to escape quickly!",
						"japanese": "この在庫の不一致…全部、彼らの違法資金を偽装するための手口だ。この数字が危険な理由だ。早く逃げないと！",
						"chinese": "这些库存不符……都是他们伪装非法资金的手段。这些数字很危险。我们得赶紧逃跑！",
						"french": "Ces incohérences d'inventaire... tout ça n'est qu'un stratagème pour dissimuler leurs fonds illégaux. C'est pourquoi ces chiffres sont dangereux. Nous devons nous échapper vite !",
						"spanish": "Esta discrepancia de inventario... todo es un truco para disfrazar sus fondos ilegales. Por eso estos números son peligrosos. ¡Tenemos que escapar rápido!",
						"vietnamese": "Những sự chênh lệch tồn kho này... tất cả là thủ đoạn để che giấu quỹ bất hợp pháp của họ. Đó là lý do tại sao những con số này nguy hiểm. Chúng ta phải chạy thoát nhanh!",
						"thai": "ความไม่ตรงกันของสินค้าคงคลังนี้... ทั้งหมดเป็นอุบายเพื่อปลอมแปลงเงินทุนที่ผิดกฎหมายของพวกเขา นั่นคือเหตุผลว่าทำไมตัวเลขเหล่านี้ถึงอันตราย เราต้องรีบหนีไป!",
						"hindi": "यह इन्वेंट्री विसंगति... यह सब उनके अवैध धन को छिपाने की एक चाल है। इसलिए ये संख्याएँ खतरनाक हैं। हमें जल्दी भागना होगा!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						1
					]
				},
				{
					"content": {
						"korean": "K-jang은 단순한 편의점 알바가 아니야. 그는 '삼일회'의 회계사였어.",
						"english": "K-jang isn't just a convenience store worker. He was 'Samilhoe's' accountant.",
						"japanese": "K-jangはただのコンビニバイトじゃない。彼は『三日会』の会計士だったんだ。",
						"chinese": "K-jang不只是个便利店店员。他是‘三日会’的会计师。",
						"french": "K-jang n'est pas qu'un simple employé de supérette. Il était le comptable de 'Samilhoe'.",
						"spanish": "K-jang no es solo un empleado de tienda de conveniencia. Él era el contador de 'Samilhoe'.",
						"vietnamese": "K-jang không chỉ là một nhân viên cửa hàng tiện lợi. Anh ta là kế toán của 'Samilhoe'.",
						"thai": "K-jang ไม่ใช่แค่พนักงานร้านสะดวกซื้อธรรมดา เขาเป็นนักบัญชีของ 'Samilhoe'",
						"hindi": "के-जैंग सिर्फ एक सुविधा स्टोर कार्यकर्ता नहीं है। वह 'समीलहोए' का अकाउंटेंट था।"
					},
					"speaker": "nia",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "회계사…? 그럼 이 모든 게…",
						"english": "An accountant...? So all of this...",
						"japanese": "会計士…？じゃあ、これ全部…",
						"chinese": "会计师……？那这一切……",
						"french": "Un comptable...? Alors tout ça...",
						"spanish": "¿Un contador...? Entonces todo esto...",
						"vietnamese": "Kế toán...? Vậy thì tất cả những điều này...",
						"thai": "นักบัญชี...? งั้นทั้งหมดนี่ก็...",
						"hindi": "एक अकाउंटेंट...? तो यह सब..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그의 장부는 곧 '삼일회'의 심장이나 다름없어. 이걸 노리는 건 너무 위험해.",
						"english": "His ledger is practically the heart of 'Samilhoe'. Going after this is too dangerous.",
						"japanese": "彼の帳簿は、まさに『三日会』の心臓だ。これを狙うのはあまりにも危険すぎる。",
						"chinese": "他的账簿简直就是‘三日会’的心脏。盯上它太危险了。",
						"french": "Son registre est pratiquement le cœur de 'Samilhoe'. Le cibler est trop dangereux.",
						"spanish": "Su libro de contabilidad es prácticamente el corazón de 'Samilhoe'. Ir tras esto es demasiado peligroso.",
						"vietnamese": "Cuốn sổ của anh ta gần như là trái tim của 'Samilhoe'. Nhắm vào nó quá nguy hiểm.",
						"thai": "บัญชีของเขาก็เปรียบเสมือนหัวใจของ 'Samilhoe' การตามล่าสิ่งนี้อันตรายเกินไป",
						"hindi": "उसका बहीखाता 'समीलहोए' का दिल है। इसे निशाना बनाना बहुत खतरनाक है।"
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "위험해도, 멈출 수 없어. 내 마을을 망가뜨린 진실을 알아야 해.",
						"english": "Even if it's dangerous, I can't stop. I need to know the truth that ruined my town.",
						"japanese": "危険でも、止められない。私の町を滅ぼした真実を知らなければならない。",
						"chinese": "即使危险，我也不能停下。我必须知道毁了我城镇的真相。",
						"french": "Même si c'est dangereux, je ne peux pas m'arrêter. Je dois connaître la vérité qui a détruit ma ville.",
						"spanish": "Aunque sea peligroso, no puedo parar. Necesito saber la verdad que arruinó mi pueblo.",
						"vietnamese": "Dù nguy hiểm, tôi cũng không thể dừng lại. Tôi cần biết sự thật đã hủy hoại thị trấn của mình.",
						"thai": "ถึงแม้มันจะอันตราย ฉันก็หยุดไม่ได้ ฉันต้องรู้ความจริงที่ทำลายเมืองของฉัน",
						"hindi": "खतरनाक होने पर भी, मैं रुक नहीं सकता। मुझे वह सच्चाई जाननी है जिसने मेरे शहर को बर्बाद कर दिया।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "깊숙이 들어갈수록, 편의점의 불빛은 더욱 어둡게 느껴졌다.",
						"english": "The deeper I went, the darker the convenience store lights felt.",
						"japanese": "深く進むにつれて、コンビニの明かりはますます暗く感じられた。",
						"chinese": "越往深处走，便利店的灯光越显得昏暗。",
						"french": "Plus je m'enfonçais, plus les lumières de la supérette semblaient sombres.",
						"spanish": "Cuanto más me adentraba, más oscuras se sentían las luces de la tienda de conveniencia.",
						"vietnamese": "Càng đi sâu vào, ánh đèn của cửa hàng tiện lợi càng trở nên tối tăm hơn.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่ แสงไฟของร้านสะดวกซื้อก็ยิ่งดูมืดมิดลงเท่านั้น",
						"hindi": "जितना गहरा मैं अंदर गया, सुविधा स्टोर की रोशनी उतनी ही अंधेरी महसूस हुई।"
					}
				},
				{
					"spot": [
						4,
						1
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "이제 되돌아갈 수 없어. K-jang은 이미 눈치챘을 거야.",
						"english": "There's no turning back now. K-jang must have noticed already.",
						"japanese": "もう後戻りできない。K-jangはもう気づいているはずだ。",
						"chinese": "现在已经无法回头了。K-jang肯定已经察觉到了。",
						"french": "Il n'y a plus de retour en arrière possible. K-jang a dû s'en rendre compte.",
						"spanish": "Ya no hay vuelta atrás. K-jang ya debe haberse dado cuenta.",
						"vietnamese": "Giờ không thể quay lại được nữa. K-jang chắc đã nhận ra rồi.",
						"thai": "ตอนนี้กลับตัวไม่ได้แล้ว K-jang คงจะรู้ตัวแล้ว",
						"hindi": "अब पीछे मुड़ना नामुमकिन है। के-जैंग को पहले ही पता चल गया होगा।"
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "신경 안 써. 난 끝까지 갈 거야.",
						"english": "I don't care. I'll go all the way.",
						"japanese": "気にしない。最後まで行くよ。",
						"chinese": "我不在乎。我会走到最后。",
						"french": "Je m'en fiche. J'irai jusqu'au bout.",
						"spanish": "No me importa. Iré hasta el final.",
						"vietnamese": "Tôi không quan tâm. Tôi sẽ đi đến cùng.",
						"thai": "ฉันไม่สนหรอก ฉันจะไปให้สุดทาง",
						"hindi": "मुझे परवाह नहीं। मैं अंत तक जाऊँगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그의 광기는 네 상상을 초월할 거야. 조심해.",
						"english": "His madness is beyond your wildest imagination. Be careful.",
						"japanese": "彼の狂気は君の想像を絶するだろう。気をつけろ。",
						"chinese": "他的疯狂将超越你的想象。小心点。",
						"french": "Sa folie dépassera ton imagination. Fais attention.",
						"spanish": "Su locura superará tu imaginación. Ten cuidado.",
						"vietnamese": "Sự điên rồ của hắn sẽ vượt xa sức tưởng tượng của ngươi. Cẩn thận đấy.",
						"thai": "ความบ้าคลั่งของเขาจะเกินจินตนาการของคุณ ระวังตัวไว้",
						"hindi": "उसकी दीवानगी तुम्हारी कल्पना से परे होगी। सावधान रहो।"
					},
					"speaker": "nia",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "...겨우 이 정도인가. 진짜 질서는, 아직 시작도 안 했다.",
						"english": "...Is this all? The true order hasn't even begun yet.",
						"japanese": "...たったこれだけか。本当の秩序は、まだ始まってもいない。",
						"chinese": "……就这点程度吗。真正的秩序，甚至还没开始。",
						"french": "...Ce n'est que ça ? Le véritable ordre n'a même pas encore commencé.",
						"spanish": "¿Solo esto? El verdadero orden ni siquiera ha comenzado aún.",
						"vietnamese": "...Chỉ có thế thôi sao. Trật tự thật sự, còn chưa bắt đầu.",
						"thai": "...แค่นี้เองหรือ? ระเบียบที่แท้จริงยังไม่ทันได้เริ่มต้นด้วยซ้ำ",
						"hindi": "...बस इतना ही? असली व्यवस्था तो अभी शुरू भी नहीं हुई है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...뭐?",
						"english": "...What?",
						"japanese": "...何？",
						"chinese": "……什么？",
						"french": "...Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "...Gì cơ?",
						"thai": "...อะไรนะ?",
						"hindi": "...क्या?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "nia",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						1
					]
				},
				{
					"content": {
						"korean": "저자는 그저 하수인일 뿐이야. K-jang이 꾸민 더 큰 그림이 있어.",
						"english": "That one is merely a minion. K-jang has a bigger scheme brewing.",
						"japanese": "あいつはただの手下に過ぎない。K-jangにはもっと大きな企みがある。",
						"chinese": "那家伙不过是个爪牙。K-jang有更大的图谋。",
						"french": "Celui-là n'est qu'un subalterne. K-jang a un plan bien plus grand en tête.",
						"spanish": "Ese es solo un secuaz. K-jang tiene un plan mucho más grande en marcha.",
						"vietnamese": "Hắn ta chỉ là một tay sai thôi. K-jang còn có một âm mưu lớn hơn nhiều.",
						"thai": "หมอนั่นเป็นแค่ลูกน้อง K-jang มีแผนการที่ใหญ่กว่านั้น",
						"hindi": "वह तो बस एक प्यादा है। K-jang की एक बड़ी साज़िश चल रही है।"
					},
					"speaker": "nia",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 조직의 그림자가 편의점 전체를 뒤덮고 있었다. 아직 끝나지 않은 이야기.",
						"english": "The shadow of a colossal organization loomed over the entire convenience store. A story yet unfinished.",
						"japanese": "巨大な組織の影がコンビニ全体を覆っていた。まだ終わらない物語。",
						"chinese": "巨大组织的阴影笼罩着整个便利店。一个尚未结束的故事。",
						"french": "L'ombre d'une organisation colossale planait sur tout le dépanneur. Une histoire pas encore terminée.",
						"spanish": "La sombra de una organización colosal cubría toda la tienda de conveniencia. Una historia aún no terminada.",
						"vietnamese": "Bóng đen của một tổ chức khổng lồ bao trùm toàn bộ cửa hàng tiện lợi. Một câu chuyện vẫn chưa kết thúc.",
						"thai": "เงาขององค์กรขนาดมหึมาปกคลุมทั่วทั้งร้านสะดวกซื้อ เรื่องราวที่ยังไม่สิ้นสุด",
						"hindi": "एक विशाल संगठन की छाया पूरे सुविधा स्टोर पर छाई हुई थी। एक ऐसी कहानी जो अभी खत्म नहीं हुई है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "편의점 가장 깊은 곳. 낡은 창고 문이 열리자 거대한 그림자가 나타났다. 그의 주변에서 숫자들이 어지럽게 명멸하는 듯했다.",
						"english": "Deepest part of the convenience store. As the old warehouse door opened, a colossal shadow emerged. Numbers seemed to flicker chaotically around him.",
						"japanese": "コンビニの最奥。古い倉庫の扉が開くと、巨大な影が現れた。彼の周りでは数字が乱雑に明滅しているようだった。",
						"chinese": "便利店最深处。当旧仓库门打开时，一个巨大的影子出现了。数字似乎在他周围混乱地闪烁着。",
						"french": "Au plus profond du dépanneur. Alors que la vieille porte de l'entrepôt s'ouvrait, une ombre colossale apparut. Des chiffres semblaient clignoter chaotiquement autour de lui.",
						"spanish": "En lo más profundo de la tienda de conveniencia. Cuando la vieja puerta del almacén se abrió, una sombra colosal apareció. Números parecían parpadear caóticamente a su alrededor.",
						"vietnamese": "Sâu nhất trong cửa hàng tiện lợi. Khi cánh cửa nhà kho cũ mở ra, một bóng đen khổng lồ xuất hiện. Những con số dường như nhấp nháy hỗn loạn xung quanh hắn.",
						"thai": "ส่วนที่ลึกที่สุดของร้านสะดวกซื้อ เมื่อประตูโกดังเก่าเปิดออก เงาขนาดมหึมาก็ปรากฏขึ้น ตัวเลขดูเหมือนจะกะพริบสลับไปมาอย่างสับสนรอบตัวเขา",
						"hindi": "सुविधा स्टोर के सबसे गहरे हिस्से में। जैसे ही पुराने गोदाम का दरवाजा खुला, एक विशाल परछाई सामने आई। उसके चारों ओर संख्याएँ अस्त-व्यस्त ढंग से टिमटिमाती हुई लग रही थीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 나의 질서를 깨려는가? 이 숫자의 흐름을 방해하지 마라.",
						"english": "Dare you disrupt my order? Do not interfere with this flow of numbers.",
						"japanese": "貴様、私の秩序を破る気か？この数字の流れを妨げるな。",
						"chinese": "胆敢破坏我的秩序？不要干扰这数字的流动。",
						"french": "Oserez-vous perturber mon ordre ? N'interférez pas avec ce flux de chiffres.",
						"spanish": "Te atreves a romper mi orden? No interfieras con este flujo de números.",
						"vietnamese": "Ngươi dám phá vỡ trật tự của ta sao? Đừng cản trở dòng chảy của những con số này.",
						"thai": "เจ้ากล้าที่จะทำลายระเบียบของข้าหรือ? อย่าขัดขวางกระแสของตัวเลขนี้",
						"hindi": "क्या तुम मेरी व्यवस्था तोड़ने की हिम्मत करते हो? इन संख्याओं के प्रवाह में बाधा मत डालो।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 K-jang의 배후인가? 이 불법적인 거래의.",
						"english": "Are you behind K-jang? Behind these illegal dealings?",
						"japanese": "お前がK-jangの黒幕か？この違法な取引の。",
						"chinese": "你是K-jang的幕后主使吗？这非法交易的。",
						"french": "Es-tu derrière K-jang ? Derrière ces transactions illégales ?",
						"spanish": "¿Eres tú quien está detrás de K-jang? ¿Detrás de estos tratos ilegales?",
						"vietnamese": "Ngươi là kẻ đứng sau K-jang sao? Của những giao dịch phi pháp này.",
						"thai": "เจ้าคือเบื้องหลังของ K-jang หรือไม่? ของการค้าที่ผิดกฎหมายนี้",
						"hindi": "क्या तुम K-jang के पीछे हो? इन अवैध लेन-देन के।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 모든 숫자의 균형이자, 이 공간의 수호자다. 너희는 불필요한 오류일 뿐.",
						"english": "I am the balance of all numbers, the guardian of this space. You are merely unnecessary errors.",
						"japanese": "私は全ての数字の均衡であり、この空間の守護者だ。お前たちは不要なエラーに過ぎない。",
						"chinese": "我是所有数字的平衡，是这个空间的守护者。你们不过是多余的错误。",
						"french": "Je suis l'équilibre de tous les nombres, le gardien de cet espace. Vous n'êtes que des erreurs inutiles.",
						"spanish": "Soy el equilibrio de todos los números, el guardián de este espacio. Vosotros sois meros errores innecesarios.",
						"vietnamese": "Ta là sự cân bằng của mọi con số, là người bảo vệ không gian này. Các ngươi chỉ là những lỗi không cần thiết.",
						"thai": "ข้าคือสมดุลของทุกตัวเลข ผู้พิทักษ์ของพื้นที่นี้ พวกเจ้าเป็นเพียงข้อผิดพลาดที่ไม่จำเป็นเท่านั้น",
						"hindi": "मैं सभी संख्याओं का संतुलन और इस स्थान का संरक्षक हूँ। तुम सब केवल अनावश्यक त्रुटियाँ हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어둠 속으로 잠식되는 숫자들. 플레이어는 쓰러졌다.",
						"english": "Numbers vanish into darkness. The player falls.",
						"japanese": "闇に飲まれる数字たち。プレイヤーは倒れた。",
						"chinese": "数字被黑暗吞噬。玩家倒下了。",
						"french": "Les nombres s'évanouissent dans l'obscurité. Le joueur est tombé.",
						"spanish": "Los números se desvanecen en la oscuridad. El jugador ha caído.",
						"vietnamese": "Những con số chìm vào bóng tối. Người chơi đã gục ngã.",
						"thai": "ตัวเลขกลืนหายไปในความมืด ผู้เล่นล้มลงแล้ว.",
						"hindi": "संख्याएँ अँधेरे में विलीन हो गईं। खिलाड़ी हार गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "오류는 제거되어야 마땅하다.",
						"english": "Errors must be eliminated.",
						"japanese": "エラーは排除されるべきだ。",
						"chinese": "错误理应被清除。",
						"french": "Les erreurs doivent être éliminées.",
						"spanish": "Los errores deben ser eliminados.",
						"vietnamese": "Lỗi phải được loại bỏ.",
						"thai": "ข้อผิดพลาดควรถูกกำจัด.",
						"hindi": "त्रुटियों को हटाना ही होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "...다시 일어설 거야. 모든 걸 밝힐 때까지.",
						"english": "...I will rise again. Until all is revealed.",
						"japanese": "...また立ち上がる。すべてを明らかにするまで。",
						"chinese": "...我会再次站起来。直到揭露一切。",
						"french": "...Je me relèverai. Jusqu'à ce que tout soit révélé.",
						"spanish": "...Me levantaré de nuevo. Hasta que todo sea revelado.",
						"vietnamese": "...Ta sẽ đứng dậy lần nữa. Cho đến khi mọi thứ được tiết lộ.",
						"thai": "...ฉันจะลุกขึ้นอีกครั้ง จนกว่าทุกสิ่งจะถูกเปิดเผย.",
						"hindi": "...मैं फिर उठूंगा। जब तक सब कुछ सामने न आ जाए।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"낡은 편의점, 그 익숙한 간판 뒤에…",
			"숨겨진 재고. 단순한 실수라 생각했다.",
			"하지만 모든 숫자는 질서를 지킨다. 어떤 불일치도 용납되지 않는다.",
			"이제야 깨닫는다. 그건 경고였다는 것을."
		],
		"english": [
			"Behind the familiar sign of an old convenience store...",
			"Hidden inventory. I thought it was a simple mistake.",
			"But all numbers follow order. No inconsistency is tolerated.",
			"Only now do I realize. It was a warning."
		],
		"japanese": [
			"古いコンビニ、あの見慣れた看板の裏に…",
			"隠された在庫。ただのミスだと思った。",
			"しかし、全ての数字は秩序を保つ。いかなる不一致も許されない。",
			"今になって気づく。あれは警告だったのだと。"
		],
		"chinese": [
			"旧便利店，那熟悉的招牌背后…",
			"隐藏的库存。我以为只是个简单的错误。",
			"但所有数字都遵循秩序。任何不一致都不能容忍。",
			"直到现在我才意识到。那是一个警告。"
		],
		"french": [
			"Derrière l'enseigne familière d'un vieux supermarché...",
			"Un stock caché. Je pensais que c'était une simple erreur.",
			"Mais tous les chiffres suivent un ordre. Aucune incohérence n'est tolérée.",
			"Ce n'est que maintenant que je réalise. C'était un avertissement."
		],
		"spanish": [
			"Detrás del letrero familiar de una vieja tienda de conveniencia...",
			"Inventario oculto. Creí que era un simple error.",
			"Pero todos los números siguen un orden. No se tolera ninguna inconsistencia.",
			"Solo ahora me doy cuenta. Fue una advertencia."
		],
		"vietnamese": [
			"Đằng sau tấm biển quen thuộc của một cửa hàng tiện lợi cũ...",
			"Hàng tồn kho ẩn. Tôi đã nghĩ đó chỉ là một sai lầm đơn giản.",
			"Nhưng tất cả các con số đều tuân theo trật tự. Không có sự không nhất quán nào được dung thứ.",
			"Giờ tôi mới nhận ra. Đó là một lời cảnh báo."
		],
		"thai": [
			"เบื้องหลังป้ายที่คุ้นเคยของร้านสะดวกซื้อเก่าแก่...",
			"สินค้าคงคลังที่ซ่อนอยู่ ฉันคิดว่าเป็นแค่ความผิดพลาดง่ายๆ",
			"แต่ตัวเลขทั้งหมดปฏิบัติตามระเบียบ ไม่มีการยอมรับความไม่สอดคล้องกัน",
			"ตอนนี้ฉันเพิ่งจะตระหนักได้ว่า นั่นคือคำเตือน"
		],
		"hindi": [
			"एक पुरानी सुविधा स्टोर के परिचित साइन के पीछे...",
			"छिपी हुई इन्वेंट्री। मैंने सोचा यह एक साधारण गलती थी।",
			"लेकिन सभी संख्याएँ व्यवस्था का पालन करती हैं। कोई असंगति बर्दाश्त नहीं की जाती।",
			"अब मुझे एहसास हुआ। वह एक चेतावनी थी।"
		]
	}
} as const;
