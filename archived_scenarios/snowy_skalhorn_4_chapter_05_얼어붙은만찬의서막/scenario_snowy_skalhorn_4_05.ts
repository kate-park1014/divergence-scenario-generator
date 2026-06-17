export const scenario_snowy_skalhorn_4_05 = {
	"scenario_id": "snowy_skalhorn_4_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "pool_110"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 고원. 스칼혼의 광채가 절정에 달했다. 그 어느 때보다도 맹렬하게.",
						"english": "The bitter cold plateau. Skalhorn's radiance reached its peak, fiercer than ever before.",
						"japanese": "極寒の高地。スカルホーンの輝きは頂点に達し、かつてないほど猛烈に。",
						"chinese": "极寒高原。斯卡尔霍恩的光芒达到了顶峰，比以往任何时候都更加猛烈。",
						"french": "Le plateau d'un froid glacial. L'éclat de Skalhorn atteignit son apogée, plus féroce que jamais.",
						"spanish": "La meseta de frío gélido. El resplandor de Skalhorn alcanzó su punto máximo, más feroz que nunca.",
						"vietnamese": "Cao nguyên lạnh giá. Ánh sáng của Skalhorn đạt đến đỉnh điểm, dữ dội hơn bao giờ hết.",
						"thai": "ที่ราบสูงอันหนาวเหน็บ แสงของสคอลฮอร์นถึงขีดสุด รุนแรงกว่าครั้งใดๆ",
						"hindi": "अत्यधिक ठंडी पठार। स्काल्हॉर्न की चमक अपने चरम पर पहुँच गई, पहले से कहीं अधिक भयंकर।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 아름다움... 동시에 이 끔찍한 한기. 룬의 기록과 달라요.",
						"english": "This beauty... and this terrible chill, simultaneously. It's different from the runic records.",
						"japanese": "この美しさ...同時に、この恐ろしい冷気。ルーンの記録とは違う。",
						"chinese": "这份美丽...同时又带着这份可怕的寒意。与符文记载的不同。",
						"french": "Cette beauté... et ce froid terrible, simultanément. C'est différent des registres runiques.",
						"spanish": "Esta belleza... y este frío terrible, simultáneamente. Es diferente de los registros rúnicos.",
						"vietnamese": "Vẻ đẹp này... và đồng thời cả sự lạnh lẽo kinh hoàng này. Nó khác với các ghi chép của rune.",
						"thai": "ความงามนี้... และความหนาวเย็นอันน่าสะพรึงกลัวนี้ในเวลาเดียวกัน มันแตกต่างจากบันทึกของรูน",
						"hindi": "यह सुंदरता... और साथ ही यह भयानक ठंड। यह रुनिक अभिलेखों से अलग है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정신이 아득해지는 것 같아. 뿔잔이 우리를 유혹하는 건가?",
						"english": "My mind feels hazy. Is the horn luring us?",
						"japanese": "意識が遠のくようだ。角杯が我々を誘惑しているのか？",
						"chinese": "感觉精神恍惚。是号角在引诱我们吗？",
						"french": "Mon esprit s'embrouille. Le cor nous séduit-il ?",
						"spanish": "Mi mente se nubla. ¿Nos está seduciendo el cuerno?",
						"vietnamese": "Tinh thần tôi mơ hồ quá. Chiếc sừng có đang quyến rũ chúng ta không?",
						"thai": "จิตใจพร่าเลือนไปหมดแล้ว หรือว่าเขาศิลาหลอกล่อเราอยู่?",
						"hindi": "मेरा मन भ्रमित सा हो रहा है। क्या यह सींग हमें लुभा रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 알 수 없는 매혹… 단순한 유물이 아니야. 분명 과거의 전설에서 본 적이 있어요.",
						"english": "This inexplicable charm… It's no mere relic. I've surely seen it in ancient legends.",
						"japanese": "この不可解な魅惑…ただの遺物ではない。確かに過去の伝説で見たことがあります。",
						"chinese": "这种莫名的魅惑…绝非寻常遗物。我肯定在过去的传说中见过它。",
						"french": "Ce charme inexplicable… Ce n'est pas une simple relique. Je l'ai sûrement vu dans d'anciennes légendes.",
						"spanish": "Este encanto inexplicable... No es una simple reliquia. Seguro lo he visto en leyendas antiguas.",
						"vietnamese": "Sức hút khó hiểu này… Không phải di vật bình thường. Tôi chắc chắn đã thấy nó trong truyền thuyết xưa.",
						"thai": "เสน่ห์อันเร้นลับนี้... นี่ไม่ใช่แค่วัตถุโบราณธรรมดา ฉันเคยเห็นมันในตำนานเก่าแก่แน่นอน",
						"hindi": "यह अविश्वसनीय आकर्षण... यह केवल एक अवशेष नहीं है। मैंने इसे निश्चित रूप से प्राचीन किंवदंतियों में देखा है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "점점 더 추워져. 몸이 얼어붙는 것 같아.",
						"english": "It's getting colder and colder. My body feels like it's freezing.",
						"japanese": "どんどん寒くなる。体が凍りつくようだ。",
						"chinese": "越来越冷了。身体好像要冻僵了。",
						"french": "Il fait de plus en plus froid. Mon corps semble geler.",
						"spanish": "Cada vez hace más frío. Siento que mi cuerpo se congela.",
						"vietnamese": "Càng ngày càng lạnh. Cơ thể tôi như đang đóng băng vậy.",
						"thai": "หนาวขึ้นเรื่อย ๆ ร่างกายเหมือนจะแข็งไปหมดแล้ว",
						"hindi": "ठंड बढ़ती जा रही है। मेरा शरीर जम रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정신을 똑바로 차려야 해요. 이건 단순한 추위가 아니야.",
						"english": "We must stay alert. This isn't just simple cold.",
						"japanese": "気をしっかり持たなければ。これは単なる寒さではない。",
						"chinese": "我们必须保持清醒。这不仅仅是普通的寒冷。",
						"french": "Nous devons rester lucides. Ce n'est pas un simple froid.",
						"spanish": "Debemos mantenernos lúcidos. Esto no es un simple frío.",
						"vietnamese": "Phải giữ tỉnh táo. Đây không phải cái lạnh đơn thuần.",
						"thai": "ต้องมีสติ นี่ไม่ใช่แค่ความหนาวธรรมดา",
						"hindi": "हमें सतर्क रहना होगा। यह सिर्फ़ ठंड नहीं है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뿔잔 속 얼어붙은 수정. 그 안에서 일그러진 형상들이 아른거렸다.",
						"english": "Frozen crystal within the horn. Distorted figures flickered within.",
						"japanese": "角杯の中の凍てついた水晶。その中で歪んだ形が揺らめいていた。",
						"chinese": "号角中冻结的水晶。扭曲的形态在其中若隐若现。",
						"french": "Cristal gelé dans le cor. Des formes distordues vacillaient à l'intérieur.",
						"spanish": "Cristal congelado dentro del cuerno. Figuras distorsionadas parpadeaban en su interior.",
						"vietnamese": "Tinh thể đóng băng trong chiếc sừng. Những hình thù méo mó lấp ló bên trong.",
						"thai": "ผลึกน้ำแข็งในเขาศิลา รูปทรงบิดเบี้ยวสั่นไหวอยู่ข้างใน",
						"hindi": "सींग के अंदर जमा हुआ क्रिस्टल। उसके भीतर विकृत आकृतियाँ टिमटिमा रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "세상에… 저것은…! 얼굴… 일그러진 얼굴들이 보여!",
						"english": "Oh my god… What is that…! Faces… I see distorted faces!",
						"japanese": "なんてことだ…あれは…！顔…歪んだ顔が見える！",
						"chinese": "天哪…那是什么…！脸…我看到扭曲的脸了！",
						"french": "Mon Dieu… Qu'est-ce que c'est… ! Des visages… Je vois des visages déformés !",
						"spanish": "Dios mío... ¡¿Qué es eso...?! Caras... ¡Veo caras distorsionadas!",
						"vietnamese": "Trời ơi… Kia là…! Mặt… Tôi thấy những khuôn mặt méo mó!",
						"thai": "พระเจ้าช่วย... นั่นมันอะไร... ! ใบหน้า... ฉันเห็นใบหน้าบิดเบี้ยว!",
						"hindi": "हे भगवान... वह क्या है...! चेहरे... मुझे विकृत चेहरे दिख रहे हैं!"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "에이라, 무슨 소리야?",
						"english": "Aira, what are you talking about?",
						"japanese": "エイラ、何を言っているの？",
						"chinese": "艾拉，你在说什么？",
						"french": "Aira, de quoi parles-tu ?",
						"spanish": "Aira, ¿de qué hablas?",
						"vietnamese": "Aira, cậu nói gì vậy?",
						"thai": "ไอรา เธอพูดเรื่องอะไรน่ะ?",
						"hindi": "ऐरा, तुम क्या कह रही हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "저들은… 잊힌 전설 속 희생자들이야. 뿔잔이… 저들을 가두고 있어!",
						"english": "They are… the victims from forgotten legends. The horn… is trapping them!",
						"japanese": "彼らは…忘れられた伝説の犠牲者たちだ。角杯が…彼らを閉じ込めている！",
						"chinese": "他们是…被遗忘传说中的受害者。号角…把他们困住了！",
						"french": "Ce sont… les victimes des légendes oubliées. Le cor… les emprisonne !",
						"spanish": "Son… las víctimas de leyendas olvidadas. ¡El cuerno… los está atrapando!",
						"vietnamese": "Họ là… những nạn nhân trong truyền thuyết bị lãng quên. Chiếc sừng… đang giam giữ họ!",
						"thai": "พวกเขาคือ... เหยื่อจากตำนานที่ถูกลืม เขาศิลา... กำลังกักขังพวกเขา!",
						"hindi": "वे... भूली हुई किंवदंतियों के शिकार हैं। यह सींग... उन्हें फँसा रहा है!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뿔잔에서 울려 퍼지는 웅얼거림. 이제는 고통스러운 비명과 왜곡된 찬가처럼 들렸다.",
						"english": "A muffled murmur echoed from the horn. Now it sounded like painful screams and distorted hymns.",
						"japanese": "角杯から響くうめき声。今やそれは苦痛の叫びと歪んだ賛歌のように聞こえた。",
						"chinese": "嗡嗡声从号角中回荡。现在听起来像痛苦的尖叫和扭曲的赞美诗。",
						"french": "Un murmure étouffé résonnait du cor. Maintenant, cela ressemblait à des cris douloureux et des hymnes déformés.",
						"spanish": "Un murmullo ahogado resonó del cuerno. Ahora sonaba como gritos dolorosos e himnos distorsionados.",
						"vietnamese": "Tiếng rì rầm vang vọng từ chiếc sừng. Giờ đây nghe như những tiếng thét đau đớn và những bài ca méo mó.",
						"thai": "เสียงครางอู้อี้ดังจากเขาศิลา ตอนนี้มันฟังดูเหมือนเสียงกรีดร้องที่เจ็บปวดและเพลงสวดที่บิดเบี้ยว",
						"hindi": "सींग से गूँजती हुई गुनगुनाहट। अब यह दर्दनाक चीखों और विकृत भजनों जैसी लग रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "들려요? 이 소리! 슬픔과… 축제… 미친 소리야!",
						"english": "Do you hear it? This sound! Sadness and… celebration… It's madness!",
						"japanese": "聞こえる？この音！悲しみと…祭り…狂気の沙汰だ！",
						"chinese": "你们听到了吗？这声音！悲伤和…狂欢…简直是疯了！",
						"french": "Vous entendez ? Ce son ! Tristesse et… fête… C'est de la folie !",
						"spanish": "¿Lo oyes? ¡Este sonido! Tristeza y… celebración… ¡Es una locura!",
						"vietnamese": "Mấy người có nghe không? Âm thanh này! Nỗi buồn và… lễ hội… Thật điên rồ!",
						"thai": "ได้ยินไหม? เสียงนี้! ความเศร้าและ... งานฉลอง... มันบ้าไปแล้ว!",
						"hindi": "सुन रहे हो? यह आवाज़! उदासी और... उत्सव... यह पागलपन है!"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "단순한 바람 소리가 아니었어… 뿔잔이 살아있는 거야?",
						"english": "That wasn't just the wind... Is the horn alive?",
						"japanese": "ただの風の音じゃなかった…角杯が生きているのか？",
						"chinese": "那不是单纯的风声…号角杯活过来了？",
						"french": "Ce n'était pas un simple bruit de vent... Le cor est-il vivant ?",
						"spanish": "No era solo el sonido del viento... ¿El cuerno está vivo?",
						"vietnamese": "Đó không chỉ là tiếng gió... Chiếc sừng này sống lại ư?",
						"thai": "นั่นไม่ใช่แค่เสียงลม... แตรนี่มีชีวิตหรือ?",
						"hindi": "वह सिर्फ हवा की आवाज़ नहीं थी... क्या सींग जीवित है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 뿔잔… 진정 축복이 아니었어. 거대한 재앙의 전조야!",
						"english": "This horn... was never a blessing. It's a prelude to a great catastrophe!",
						"japanese": "この角杯…決して祝福ではなかった。巨大な災厄の前兆だ！",
						"chinese": "这个号角杯…根本不是祝福。这是巨大灾难的预兆！",
						"french": "Ce cor... n'a jamais été une bénédiction. C'est le prélude à une grande catastrophe !",
						"spanish": "Este cuerno... nunca fue una bendición. ¡Es el preludio de una gran catástrofe!",
						"vietnamese": "Chiếc sừng này... không hề là một phước lành. Nó là điềm báo của một tai họa lớn!",
						"thai": "แตรนี้... ไม่ใช่พรเลย มันเป็นลางบอกเหตุของหายนะครั้งใหญ่!",
						"hindi": "यह सींग... कभी आशीर्वाद नहीं था। यह एक बड़ी आपदा का शगुन है!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 하지만 기억해라. 만찬은… 이제 시작일 뿐이다….",
						"english": "A trivial resistance... But remember. The feast... has only just begun....",
						"japanese": "些細な抵抗…だが覚えておけ。宴は…まだ始まったばかりだ…。",
						"chinese": "微不足道的抵抗…但记住。盛宴…才刚刚开始…。",
						"french": "Une résistance futile... Mais souvenez-vous. Le festin... ne fait que commencer...",
						"spanish": "Una resistencia trivial... Pero recordad. El festín... apenas ha comenzado...",
						"vietnamese": "Một sự kháng cự tầm thường... Nhưng hãy nhớ. Bữa tiệc... chỉ mới bắt đầu thôi...",
						"thai": "การต่อต้านที่ไร้สาระ... แต่จงจำไว้ งานเลี้ยง... เพิ่งจะเริ่มต้นเท่านั้น...",
						"hindi": "एक तुच्छ प्रतिरोध... लेकिन याद रखना। दावत... अभी शुरू ही हुई है...।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어… 우리가 해냈어!",
						"english": "It's over... We did it!",
						"japanese": "終わった…やったぞ！",
						"chinese": "结束了…我们成功了！",
						"french": "C'est fini... Nous l'avons fait !",
						"spanish": "Se acabó... ¡Lo logramos!",
						"vietnamese": "Xong rồi... Chúng ta đã làm được!",
						"thai": "จบแล้ว... เราทำได้!",
						"hindi": "यह खत्म हो गया... हमने कर दिखाया!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "아직… 끝이 아닐지도 몰라. 그의 마지막 말이….",
						"english": "It might not be over yet... His last words...",
						"japanese": "まだ…終わってないかもしれない。彼の最後の言葉が…。",
						"chinese": "也许…还没结束。他的最后一句话…。",
						"french": "Ce n'est peut-être pas encore fini... Ses derniers mots...",
						"spanish": "Quizás... no ha terminado todavía. Sus últimas palabras...",
						"vietnamese": "Có lẽ... chưa kết thúc đâu. Lời cuối cùng của hắn...",
						"thai": "อาจจะ... ยังไม่จบ. คำพูดสุดท้ายของเขา...",
						"hindi": "शायद... यह अभी खत्म नहीं हुआ है। उसके आखिरी शब्द...।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔의 광채는 사그라들었지만, 숲의 한기는 여전히 남아 있었다. 예언된 '얼어붙은 만찬'은 과연 끝난 것인가.",
						"english": "The horn's radiance faded, but the forest's chill remained. Had the prophesied 'frozen feast' truly ended?",
						"japanese": "角杯の輝きは消え去ったが、森の寒気は依然として残っていた。予言された「凍てつく宴」は本当に終わったのだろうか。",
						"chinese": "号角杯的光芒消散了，但森林的寒意依然存在。预言中的“冰冻盛宴”真的结束了吗？",
						"french": "L'éclat du cor s'est éteint, mais le froid de la forêt persistait. Le \"festin gelé\" prophétisé était-il vraiment terminé ?",
						"spanish": "El resplandor del cuerno se desvaneció, pero el frío del bosque aún permanecía. ¿Había terminado realmente el 'festín helado' profetizado?",
						"vietnamese": "Ánh sáng của chiếc sừng đã mờ đi, nhưng cái lạnh của rừng vẫn còn đó. Liệu 'bữa tiệc băng giá' được tiên tri đã thực sự kết thúc chưa?",
						"thai": "แสงของแตรจางหายไป แต่ความหนาวเย็นของป่ายังคงอยู่ 'งานเลี้ยงอันเยือกแข็ง' ที่ถูกพยากรณ์ไว้ได้สิ้นสุดลงแล้วจริงหรือ?",
						"hindi": "सींग की चमक फीकी पड़ गई, लेकिन जंगल की ठंडक अभी भी बनी हुई थी। क्या भविष्यवाणी की गई 'जमी हुई दावत' वास्तव में समाप्त हो गई थी?"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔의 광채가 폭발하듯 솟아올랐다. 그 한가운데, 얼음의 군주가 모습을 드러냈다.",
						"english": "The horn's radiance erupted. In its midst, the Lord of Ice appeared.",
						"japanese": "角杯の輝きが爆発するように surging した。その真ん中に、氷の君主が姿を現した。",
						"chinese": "号角杯的光芒爆发而出。在那之中，冰霜君主显现了。",
						"french": "L'éclat du cor a éclaté. Au milieu, le Seigneur de Glace est apparu.",
						"spanish": "El resplandor del cuerno estalló. En su centro, el Señor del Hielo apareció.",
						"vietnamese": "Ánh sáng của chiếc sừng bùng nổ. Giữa nó, Lãnh chúa Băng giá xuất hiện.",
						"thai": "แสงของแตรระเบิดขึ้น ตรงกลางนั้น ลอร์ดแห่งน้ำแข็งก็ปรากฏตัว",
						"hindi": "सींग की चमक फट पड़ी। उसके बीच में, बर्फ का स्वामी प्रकट हुआ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "오랜만이다, 필멸자들. 나의 얼어붙은 만찬에 온 것을 환영한다.",
						"english": "Long time no see, mortals. Welcome to my frozen feast.",
						"japanese": "久しいな、定命の者たちよ。我が凍てつく宴へようこそ。",
						"chinese": "凡人，好久不见。欢迎来到我的冰冻盛宴。",
						"french": "Longtemps sans vous voir, mortels. Bienvenue à mon festin gelé.",
						"spanish": "Mucho tiempo sin vernos, mortales. Bienvenidos a mi festín helado.",
						"vietnamese": "Lâu rồi không gặp, những kẻ phàm trần. Chào mừng đến với bữa tiệc băng giá của ta.",
						"thai": "ไม่ได้เจอกันนานนะ มนุษย์เอย ยินดีต้อนรับสู่มื้ออาหารอันเยือกแข็งของข้า",
						"hindi": "बहुत समय हो गया, नश्वर प्राणियों। मेरे जमे हुए भोज में आपका स्वागत है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 일의 원흉이구나!",
						"english": "You... You're the one behind all of this!",
						"japanese": "お前が…この全ての元凶か！",
						"chinese": "你就是…这一切的幕后黑手！",
						"french": "Tu... Tu es la cause de tout cela !",
						"spanish": "Tú... ¡Tú eres la mente maestra detrás de todo esto!",
						"vietnamese": "Ngươi... Ngươi là kẻ đứng sau tất cả chuyện này!",
						"thai": "แก... แกคือต้นเหตุของเรื่องทั้งหมดนี่เอง!",
						"hindi": "तुम... तुम ही इस सब के पीछे हो!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "축복받은 겨울은 계속될 것이다. 너희도 곧 그 일부가 될 테니.",
						"english": "The blessed winter will continue. And you, too, will soon become a part of it.",
						"japanese": "祝福されし冬は続くだろう。お前たちもじきにその一部となるのだから。",
						"chinese": "受祝福的冬天将会持续。你们很快也会成为其中的一部分。",
						"french": "L'hiver béni continuera. Et vous aussi, vous en ferez bientôt partie.",
						"spanish": "El invierno bendecido continuará. Y vosotros también, pronto seréis parte de él.",
						"vietnamese": "Mùa đông được ban phước sẽ tiếp tục. Và các ngươi cũng sẽ sớm trở thành một phần của nó.",
						"thai": "ฤดูหนาวอันเป็นพรจะดำเนินต่อไป และพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของมันในไม่ช้า",
						"hindi": "धन्य सर्दी जारी रहेगी। और तुम भी, जल्द ही इसका हिस्सा बन जाओगे।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "미약한 존재들. 영원한 겨울의 일부가 되어라. 나의 위대한 만찬에 참여하거라!",
						"english": "Weaklings. Become part of the eternal winter. Join my grand feast!",
						"japanese": "弱き者たちよ。永遠の冬の一部となれ。我が偉大なる晩餐に参加せよ！",
						"chinese": "弱小的存在。成为永恒冬天的一部分吧。加入我盛大的晚宴！",
						"french": "Faibles créatures. Devenez une partie de l'hiver éternel. Rejoignez mon grand festin !",
						"spanish": "Seres insignificantes. Sed parte del invierno eterno. ¡Uníos a mi gran festín!",
						"vietnamese": "Những kẻ yếu ớt. Hãy trở thành một phần của mùa đông vĩnh cửu. Tham gia vào bữa tiệc vĩ đại của ta!",
						"thai": "พวกอ่อนแอ จงเป็นส่วนหนึ่งของเหมันต์นิรันดร์ มาร่วมงานเลี้ยงอันยิ่งใหญ่ของข้า!",
						"hindi": "कमजोर प्राणी। शाश्वत शीतकाल का हिस्सा बनो। मेरे भव्य भोज में शामिल हो जाओ!"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기하지 않아! 우리는 반드시 돌아온다!",
						"english": "Not yet... I won't give up! We will surely return!",
						"japanese": "まだだ…諦めない！我々は必ず戻ってくる！",
						"chinese": "还没…不会放弃！我们一定会回来的！",
						"french": "Pas encore... Je n'abandonnerai pas ! Nous reviendremos sûrement !",
						"spanish": "¡Todavía no... No me rendiré! ¡Seguro que volveremos!",
						"vietnamese": "Chưa... Ta sẽ không bỏ cuộc! Chúng ta nhất định sẽ trở lại!",
						"thai": "ยัง… ไม่ยอมแพ้! เราจะกลับมาแน่นอน!",
						"hindi": "अभी नहीं... मैं हार नहीं मानूँगा! हम निश्चित रूप से वापस आएंगे!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이대로 끝낼 수 없어… 잊힌 기록을 다시 찾아야 해.",
						"english": "It can't end like this... We must find the forgotten records again.",
						"japanese": "このままでは終われない…忘れられた記録をもう一度見つけなければ。",
						"chinese": "不能就这样结束…必须再次找回被遗忘的记录。",
						"french": "Ça ne peut pas finir comme ça... Nous devons retrouver les registres oubliés.",
						"spanish": "No puede terminar así... Debemos encontrar los registros olvidados de nuevo.",
						"vietnamese": "Không thể kết thúc thế này được... Chúng ta phải tìm lại những ghi chép đã lãng quên.",
						"thai": "จะจบแบบนี้ไม่ได้… เราต้องค้นหาบันทึกที่ถูกลืมอีกครั้ง",
						"hindi": "यह ऐसे खत्म नहीं हो सकता... हमें भूले हुए अभिलेखों को फिर से खोजना होगा।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 고원, 그 가장 깊은 곳. 마침내 스칼혼의 진정한 모습이 드러났다.",
			"뿔잔의 푸른 광채 속, 에이라의 눈에 비친 것은 차가운 아름다움만이 아니었다.",
			"오랜 전설이 깨어나는 순간, 광기의 비명과 왜곡된 축제가 시작되려 한다.",
			"진실의 첫 균열. 과연 이것은 구원인가, 아니면 새로운 재앙의 서막인가."
		],
		"english": [
			"In the deepest reaches of the frozen plateau, Skalhorn's true form was finally revealed.",
			"Within the horn's blue radiance, Aira saw more than just cold beauty.",
			"As ancient legends awaken, a festival of distorted screams and madness is about to begin.",
			"The first crack in truth. Is this salvation, or the prelude to a new calamity?"
		],
		"japanese": [
			"凍てつく高地の最深部。ついにスカルホーンの真の姿が露わになった。",
			"角杯の蒼い輝きの中、エイラの目に映ったのは、ただ冷たい美しさだけではなかった。",
			"古き伝説が目覚める時、狂気の悲鳴と歪んだ祝祭が始まろうとしている。",
			"真実の最初の亀裂。これは救済か、それとも新たな災厄の序章か。"
		],
		"chinese": [
			"冰封高原的最深处。斯卡尔霍恩的真实面貌终于显现。",
			"在号角的蓝色光芒中，艾拉眼中映出的不止是冰冷的美丽。",
			"古老传说苏醒之际，一场扭曲尖叫与疯狂的盛宴即将拉开序幕。",
			"真相的首次裂痕。这究竟是救赎，还是新灾难的序幕？"
		],
		"french": [
			"Au plus profond du plateau gelé, la véritable forme de Skalhorn fut enfin révélée.",
			"Dans la lueur bleue du cor, Aira vit bien plus qu'une froide beauté.",
			"Au moment où d'anciennes légendes s'éveillent, un festival de cris déformés et de folie est sur le point de commencer.",
			"La première fissure de la vérité. Est-ce le salut, ou le prélude à une nouvelle calamité ?"
		],
		"spanish": [
			"En lo más recóndito de la meseta helada, la verdadera forma de Skalhorn fue finalmente revelada.",
			"Dentro del resplandor azul del cuerno, Aira vio más que una fría belleza.",
			"En el instante en que las antiguas leyendas despiertan, un festival de gritos distorsionados y locura está a punto de comenzar.",
			"La primera grieta en la verdad. ¿Es esto la salvación, o el preludio de una nueva calamidad?"
		],
		"vietnamese": [
			"Sâu thẳm nhất trên cao nguyên đóng băng, hình hài thật sự của Skalhorn cuối cùng đã lộ diện.",
			"Trong ánh sáng xanh của chiếc sừng, Aira nhìn thấy không chỉ vẻ đẹp lạnh lùng.",
			"Khoảnh khắc truyền thuyết cổ xưa thức tỉnh, một lễ hội của những tiếng hét điên loạn và sự méo mó sắp bắt đầu.",
			"Vết nứt đầu tiên của sự thật. Liệu đây là sự cứu rỗi, hay khúc dạo đầu cho một tai họa mới?"
		],
		"thai": [
			"ณ ส่วนลึกที่สุดของที่ราบสูงน้ำแข็ง ร่างที่แท้จริงของสคอลฮอร์นได้ปรากฏขึ้นในที่สุด",
			"ภายในแสงสีน้ำเงินของแตร เอราเห็นมากกว่าความงามอันเย็นชา",
			"เมื่อตำนานเก่าแก่ตื่นขึ้น เสียงกรีดร้องอันบิดเบี้ยวและเทศกาลแห่งความวิกลจริตกำลังจะเริ่มต้นขึ้น",
			"รอยร้าวแรกของความจริง นี่คือความรอด หรืออารัมภบทของภัยพิบัติครั้งใหม่กันแน่?"
		],
		"hindi": [
			"जमी हुई पठार की सबसे गहरी जगह में, आखिरकार स्काल्हॉर्न का असली रूप सामने आया।",
			"सींग की नीली चमक में, ऐरा ने सिर्फ ठंडी सुंदरता से कहीं ज़्यादा देखा।",
			"जैसे ही प्राचीन किंवदंतियाँ जागृत होती हैं, उन्माद की चीखें और विकृत उत्सव शुरू होने वाला है।",
			"सत्य की पहली दरार। क्या यह मोक्ष है, या एक नई आपदा का प्रस्तावना?"
		]
	},
	"epilogue": {
		"korean": [
			"스칼혼의 맹렬한 광채는 잠들었다. 고원은 잠시의 고요를 되찾았으나.",
			"에이라의 귓가에는 여전히 왜곡된 찬가와 비명이 맴돌았다.",
			"얼어붙은 만찬은 막을 내린 것인가, 아니면 그저 서막에 불과했던 것인가.",
			"차가운 침묵 속에서, 누구도 알 수 없는 다음 겨울을 기다리고 있었다."
		],
		"english": [
			"Skalhorn's fierce radiance slept. The plateau regained a fleeting calm, but...",
			"In Aira's ears, distorted hymns and screams still echoed.",
			"Had the frozen feast ended, or was it merely the prologue?",
			"In the cold silence, they awaited the next winter, one no one could foresee."
		],
		"japanese": [
			"スカルホーンの猛烈な輝きは眠った。高地は一時的な静寂を取り戻したが。",
			"エイラの耳元には、いまだ歪んだ賛歌と悲鳴が響いていた。",
			"凍てつく饗宴は幕を閉じたのか、それともただの序幕に過ぎなかったのか。",
			"冷たい沈黙の中、誰も知ることのない次の冬を待っていた。"
		],
		"chinese": [
			"斯卡尔霍恩的猛烈光芒已沉寂。高原暂时恢复了宁静，但...",
			"艾拉耳边，扭曲的赞歌和尖叫依然萦绕。",
			"冰封的盛宴是已落幕，还是仅仅序章？",
			"在冰冷的沉默中，等待着无人知晓的下一个冬天。"
		],
		"french": [
			"L'éclat féroce de Skalhorn s'était assoupi. Le plateau retrouva un calme éphémère, mais...",
			"Aux oreilles d'Aira, des hymnes déformés et des cris résonnaient toujours.",
			"Le festin gelé s'était-il achevé, ou n'était-ce qu'un prologue ?",
			"Dans le froid silence, ils attendaient le prochain hiver, celui que personne ne pouvait prévoir."
		],
		"spanish": [
			"El feroz resplandor de Skalhorn se durmió. La meseta recuperó una calma fugaz, pero...",
			"En los oídos de Aira, himnos distorsionados y gritos aún resonaban.",
			"¿Había terminado el banquete helado, o era solo el prólogo?",
			"En el frío silencio, esperaban el próximo invierno, uno que nadie podía prever."
		],
		"vietnamese": [
			"Ánh sáng dữ dội của Skalhorn đã ngủ yên. Cao nguyên lấy lại được sự yên tĩnh tạm thời, nhưng...",
			"Trong tai Aira, những bài ca méo mó và tiếng hét vẫn còn văng vẳng.",
			"Bữa tiệc đóng băng đã kết thúc, hay chỉ là khúc dạo đầu?",
			"Trong sự im lặng lạnh giá, họ chờ đợi mùa đông tiếp theo, một mùa đông không ai có thể đoán trước."
		],
		"thai": [
			"แสงอันรุนแรงของสคอลฮอร์นสงบนิ่ง ที่ราบสูงกลับคืนสู่ความเงียบสงบชั่วครู่ ทว่า...",
			"ในหูของเอรา เพลงสวดที่บิดเบี้ยวและเสียงกรีดร้องยังคงดังก้องอยู่",
			"งานเลี้ยงอันเยือกแข็งได้สิ้นสุดลงแล้ว หรือเป็นเพียงอารัมภบทเท่านั้น?",
			"ในความเงียบงันอันหนาวเหน็บ พวกเขากำลังรอคอยฤดูหนาวถัดไป ซึ่งไม่มีใครรู้ว่าจะเกิดอะไรขึ้น"
		],
		"hindi": [
			"स्काल्हॉर्न की प्रचंड चमक सो गई। पठार को क्षणिक शांति मिली, लेकिन।",
			"ऐरा के कानों में, विकृत भजन और चीखें अभी भी गूँज रही थीं।",
			"क्या जमी हुई दावत खत्म हो गई थी, या यह केवल प्रस्तावना थी?",
			"ठंडी खामोशी में, वे अगली सर्दी का इंतजार कर रहे थे, एक ऐसी सर्दी जिसे कोई नहीं देख सकता था।"
		]
	}
} as const;
