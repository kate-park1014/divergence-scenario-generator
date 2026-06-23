export const scenario_desert_dustbound_3_02 = {
	"scenario_id": "desert_dustbound_3_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "고대 사막 부족의 유적이 희미하게 모습을 드러냈다. 모래 먼지가 춤을 추고 있었다.",
						"english": "The ruins of an ancient desert tribe faintly appeared. Sand dust danced.",
						"japanese": "古代砂漠部族の遺跡がかすかに姿を現した。砂埃が舞っていた。",
						"chinese": "古代沙漠部落的遗迹若隐若现。沙尘飞舞。",
						"french": "Les ruines d'une ancienne tribu du désert apparurent faiblement. La poussière de sable dansait.",
						"spanish": "Las ruinas de una antigua tribu del desierto aparecieron tenuemente. El polvo de arena danzaba.",
						"vietnamese": "Tàn tích của một bộ lạc sa mạc cổ đại lờ mờ hiện ra. Bụi cát đang nhảy múa.",
						"thai": "ซากปรักหักพังของชนเผ่าทะเลทรายโบราณปรากฏให้เห็นลางๆ ฝุ่นทรายกำลังฟุ้งกระจาย",
						"hindi": "प्राचीन रेगिस्तानी जनजाति के खंडहर हल्के से प्रकट हुए। रेत की धूल नाच रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kasai",
					"action": "enter"
				},
				{
					"content": {
						"korean": "…여기까지 찾아왔군요. 외부인들이여.",
						"english": "...So you've come all this way, outsiders.",
						"japanese": "…ここまで辿り着いたのですね、部外者たちよ。",
						"chinese": "……你们竟然找到了这里，外来者们。",
						"french": "...Vous avez donc trouvé le chemin jusqu'ici, étrangers.",
						"spanish": "...Así que han llegado hasta aquí, forasteros.",
						"vietnamese": "...Các người đã tìm đến tận đây, những kẻ ngoại lai.",
						"thai": "...พวกเจ้ามาถึงที่นี่แล้วสินะ คนนอก",
						"hindi": "तो तुम यहाँ तक पहुँच गए, बाहरी लोगों।"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 누구죠? 울부짖는 오아시스를 찾고 있어요.",
						"english": "Who are you? We're looking for the Crying Oasis.",
						"japanese": "あなたは誰ですか？「叫びのオアシス」を探しています。",
						"chinese": "你是谁？我们正在寻找呜咽绿洲。",
						"french": "Qui êtes-vous ? Nous cherchons l'Oasis Hurlante.",
						"spanish": "¿Quién eres? Estamos buscando el Oasis Llorón.",
						"vietnamese": "Cô là ai? Chúng tôi đang tìm Ốc đảo Khóc Than.",
						"thai": "ท่านคือใคร? พวกเรากำลังตามหาโอเอซิสรำพัน",
						"hindi": "तुम कौन हो? हम चीख़ने वाले नखलिस्तान को ढूंढ रहे हैं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "난 카사이. 오래된 부족의 후예예요. 오아시스는… 단순한 곳이 아니에요.",
						"english": "I am Kasai, a descendant of an ancient tribe. The Oasis... it's not just a simple place.",
						"japanese": "私はカサイ。古い部族の末裔です。オアシスは…ただの場所ではありません。",
						"chinese": "我是卡赛，古老部落的后裔。绿洲……它可不是一个简单的地方。",
						"french": "Je suis Kasai, descendante d'une ancienne tribu. L'Oasis... ce n'est pas un simple endroit.",
						"spanish": "Soy Kasai, descendiente de una antigua tribu. El Oasis... no es un lugar cualquiera.",
						"vietnamese": "Tôi là Kasai, hậu duệ của một bộ lạc cổ xưa. Ốc đảo... không phải là một nơi đơn giản.",
						"thai": "ฉันคือคาไซ ผู้สืบเชื้อสายจากชนเผ่าโบราณ โอเอซิส...ไม่ใช่แค่สถานที่ธรรมดา",
						"hindi": "मैं कसाई हूँ, एक प्राचीन जनजाति की वंशज। नखलिस्तान... यह सिर्फ एक साधारण जगह नहीं है।"
					}
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "그곳엔 고대의 맹세가 얽혀있어요. 함부로 다가서지 마세요.",
						"english": "Ancient vows are intertwined there. Don't approach carelessly.",
						"japanese": "そこには古代の誓いが絡み合っています。むやみに近づかないでください。",
						"chinese": "那里缠绕着古老的誓言。不要贸然接近。",
						"french": "De vieux serments y sont liés. Ne vous approchez pas imprudemment.",
						"spanish": "Hay antiguos juramentos entrelazados allí. No te acerques sin precaución.",
						"vietnamese": "Ở đó có những lời thề cổ xưa đan xen. Đừng tùy tiện tiếp cận.",
						"thai": "มีคำสาบานโบราณเกี่ยวพันอยู่ อย่าเข้าไปใกล้โดยไม่ระมัดระวัง",
						"hindi": "वहाँ प्राचीन वचन गुँथे हुए हैं। लापरवाही से पास मत आना।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "kasai",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "우리 부족의 전승에 따르면, 오아시스는 큰 상실을 겪은 전사의 눈물로 만들어졌다고 해요.",
						"english": "According to our tribe's lore, the Oasis was formed from the tears of a warrior who suffered great loss.",
						"japanese": "我が部族の伝承によれば、オアシスは大きな喪失を経験した戦士の涙でできたと言われています。",
						"chinese": "根据我们部落的传说，绿洲是由一位遭受巨大损失的战士的眼泪形成的。",
						"french": "Selon les traditions de notre tribu, l'Oasis a été formée par les larmes d'un guerrier ayant subi une grande perte.",
						"spanish": "Según la tradición de nuestra tribu, el Oasis fue creado con las lágrimas de un guerrero que sufrió una gran pérdida.",
						"vietnamese": "Theo truyền thuyết của bộ lạc chúng tôi, Ốc đảo được tạo thành từ nước mắt của một chiến binh đã trải qua mất mát lớn.",
						"thai": "ตามตำนานของชนเผ่าเรา โอเอซิสนี้ถูกสร้างขึ้นจากน้ำตาของนักรบผู้ประสบความสูญเสียครั้งใหญ่",
						"hindi": "हमारी जनजाति की लोककथा के अनुसार, नखलिस्तान एक महान हानि झेलने वाले योद्धा के आँसुओं से बना था।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "전사의 눈물이라니….",
						"english": "Warrior's tears...",
						"japanese": "戦士の涙だと...",
						"chinese": "战士的眼泪吗...",
						"french": "Des larmes de guerrier...",
						"spanish": "¿Lágrimas de guerrero...?",
						"vietnamese": "Nước mắt của chiến binh sao...",
						"thai": "น้ำตาของนักรบงั้นหรือ...",
						"hindi": "योद्धा के आँसू..."
					}
				},
				{
					"content": {
						"korean": "슬픔과 맹세가 모래가 되어 그곳을 지키는 거죠. 그래서 '울부짖는다'고….",
						"english": "Sorrow and vows turned to sand, guarding that place. That's why it's said to 'wail'...",
						"japanese": "悲しみと誓いが砂となって、そこを守っているんだ。だから『慟哭する』と...",
						"chinese": "悲伤与誓言化为沙土，守护着那个地方。所以才说它在'哭泣'...",
						"french": "La tristesse et les serments se sont transformés en sable, gardant ce lieu. C'est pourquoi on dit qu'il 'pleure'...",
						"spanish": "La pena y los juramentos se convirtieron en arena, protegiendo ese lugar. Por eso se dice que 'gime'...",
						"vietnamese": "Nỗi buồn và lời thề hóa thành cát, bảo vệ nơi đó. Vì vậy người ta nói nó 'than khóc'...",
						"thai": "ความโศกเศร้าและคำสาบานกลายเป็นทราย คอยปกปักษ์สถานที่แห่งนั้น นั่นจึงเป็นเหตุผลที่ว่าทำไมถึงถูกเรียกว่า 'เสียงคร่ำครวญ'...",
						"hindi": "दुःख और शपथ रेत में बदल गए, उस जगह की रक्षा कर रहे हैं। इसीलिए इसे 'विलाप' कहा जाता है..."
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정말 사막에 스러져 모래가 된 전사가 있다는 말인가요?",
						"english": "Are you saying there's truly a warrior who perished in the desert, turning into sand?",
						"japanese": "本当に砂漠で倒れて砂になった戦士がいるってことですか？",
						"chinese": "真的有战士在沙漠中倒下，化作了沙土吗？",
						"french": "Voulez-vous dire qu'un guerrier a vraiment péri dans le désert, devenant du sable ?",
						"spanish": "¿Estás diciendo que un guerrero de verdad pereció en el desierto, convirtiéndose en arena?",
						"vietnamese": "Thật sự có chiến binh ngã xuống sa mạc và hóa thành cát sao?",
						"thai": "คุณกำลังบอกว่ามีนักรบที่ล้มตายในทะเลทรายและกลายเป็นทรายจริงๆ หรือ?",
						"hindi": "क्या आप कह रहे हैं कि सच में कोई योद्धा रेगिस्तान में मरकर रेत बन गया?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "부족의 성소에 가면 더 많은 기록이 있을 거예요. 날 따라와요.",
						"english": "You'll find more records in the tribe's sanctuary. Follow me.",
						"japanese": "部族の聖所に行けば、もっと多くの記録があるでしょう。ついてきてください。",
						"chinese": "去部落的圣所会有更多的记载。跟着我来。",
						"french": "Vous trouverez plus d'archives dans le sanctuaire de la tribu. Suivez-me.",
						"spanish": "Encontrarás más registros en el santuario de la tribu. Sígueme.",
						"vietnamese": "Bạn sẽ tìm thấy nhiều ghi chép hơn ở thánh địa của bộ tộc. Đi theo tôi.",
						"thai": "จะมีบันทึกอีกมากมายในวิหารศักดิ์สิทธิ์ของเผ่า ตามฉันมาสิ",
						"hindi": "आपको जनजाति के पवित्र स्थान पर और अधिक अभिलेख मिलेंगे। मेरे पीछे आओ।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "kasai",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "부족의 성소. 오래된 석판들이 켜켜이 쌓여 있었다.",
						"english": "The Tribe's Sanctuary. Ancient stone tablets lay piled high.",
						"japanese": "部族の聖所。古い石板が幾重にも積み重なっていた。",
						"chinese": "部落的圣所。古老的石板层层堆叠。",
						"french": "Le sanctuaire de la Tribu. D'anciennes tablettes de pierre étaient empilées.",
						"spanish": "El Santuario de la Tribu. Antiguas tablillas de piedra yacían apiladas.",
						"vietnamese": "Thánh địa của bộ tộc. Những tấm bia đá cổ xưa chất chồng lên nhau.",
						"thai": "วิหารศักดิ์สิทธิ์ของเผ่า แผ่นศิลาโบราณวางซ้อนทับกันเป็นชั้นๆ",
						"hindi": "जनजाति का पवित्र स्थान। पुरानी पत्थर की पट्टियाँ एक के ऊपर एक ढेर थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 석판에 쓰여 있어요. '맹세에 묶인 그림자가 한 방울의 슬픔을 영원히 지킨다'고.",
						"english": "It's written on this tablet: 'A shadow bound by an oath forever guards a single drop of sorrow.'",
						"japanese": "この石板に書かれています。『誓いに縛られた影が、一滴の悲しみを永遠に守る』と。",
						"chinese": "这石板上写着：‘被誓言束缚的影子，将永远守护一滴悲伤。’",
						"french": "Il est écrit sur cette tablette : « Une ombre liée par un serment garde à jamais une seule goutte de chagrin. »",
						"spanish": "Está escrito en esta tablilla: 'Una sombra atada por un juramento custodia por siempre una única gota de pena'.",
						"vietnamese": "Trên tấm bia đá này có ghi: 'Một bóng hình bị ràng buộc bởi lời thề sẽ vĩnh viễn bảo vệ một giọt nước mắt buồn.'",
						"thai": "มันเขียนอยู่บนแผ่นศิลานี้: 'เงาที่ผูกพันด้วยคำสาบานจะคอยปกปักษ์หยาดน้ำตาแห่งความโศกเศร้าเพียงหยดเดียวไปชั่วนิรันดร์'",
						"hindi": "इस शिला पर लिखा है: 'शपथ से बंधी एक छाया हमेशा के लिए दुःख की एक बूंद की रक्षा करती है।'"
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맹세에 묶인 그림자… 슬픔의 한 방울… 그게 대체 뭐죠?",
						"english": "A shadow bound by an oath... A single drop of sorrow... What exactly are they?",
						"japanese": "誓いに縛られた影… 悲しみの雫… それは一体何ですか？",
						"chinese": "被誓言束缚的影子……一滴悲伤……那到底是什么？",
						"french": "Une ombre liée par un serment... Une goutte de chagrin... Qu'est-ce que c'est, au juste ?",
						"spanish": "Una sombra atada por un juramento... Una gota de pena... ¿Qué es eso, exactamente?",
						"vietnamese": "Bóng hình bị ràng buộc bởi lời thề... Một giọt nước mắt buồn... Rốt cuộc chúng là gì?",
						"thai": "เงาที่ผูกพันด้วยคำสาบาน... หยาดน้ำตาแห่งความโศกเศร้า... มันคืออะไรกันแน่?",
						"hindi": "शपथ से बंधी एक छाया... दुःख की एक बूंद... आखिर वह क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kasai",
					"type": "speech",
					"content": {
						"korean": "성소 깊은 곳에 그 답이 있을 거예요. 하지만… 조심해야 해요.",
						"english": "The answer will be deep within the sanctuary. But... you must be careful.",
						"japanese": "聖所の奥深く…そこに答えがあるでしょう。でも…気をつけなければなりません。",
						"chinese": "答案应该在圣所深处。但是……你必须小心。",
						"french": "La réponse se trouvera au plus profond du sanctuaire. Mais... vous devrez être prudent.",
						"spanish": "La respuesta estará en lo más profundo del santuario. Pero... debes tener cuidado.",
						"vietnamese": "Câu trả lời sẽ nằm sâu bên trong thánh địa. Nhưng... bạn phải cẩn thận.",
						"thai": "คำตอบจะอยู่ที่ส่วนลึกของวิหารศักดิ์สิทธิ์ แต่... คุณต้องระวัง",
						"hindi": "जवाब पवित्र स्थान के गहरे भीतर होगा। लेकिन... आपको सावधान रहना होगा।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 위험이라도 있나요?",
						"english": "Is there any danger?",
						"japanese": "何か危険でもあるんですか？",
						"chinese": "有什么危险吗？",
						"french": "Y a-t-il un danger ?",
						"spanish": "¿Hay algún peligro?",
						"vietnamese": "Có nguy hiểm nào không?",
						"thai": "มีอันตรายอะไรหรือเปล่า?",
						"hindi": "क्या कोई खतरा है?"
					},
					"speaker": "character_2"
				},
				{
					"emotion": "angry",
					"speaker": "kasai",
					"content": {
						"korean": "오래된 수호자들이 잠들어 있어요. 외부인을 용납하지 않을 거예요.",
						"english": "Ancient guardians slumber there. They won't tolerate outsiders.",
						"japanese": "古い守護者たちが眠っています。彼らは部外者を許さないでしょう。",
						"chinese": "古老的守护者沉睡在那里。他们不会容忍外来者。",
						"french": "D'anciens gardiens y dorment. Ils ne toléreront pas les étrangers.",
						"spanish": "Antiguos guardianes duermen allí. No tolerarán a los forasteros.",
						"vietnamese": "Những người bảo vệ cổ xưa đang ngủ ở đó. Họ sẽ không dung thứ cho những kẻ ngoại lai.",
						"thai": "ผู้พิทักษ์โบราณหลับใหลอยู่ที่นั่น พวกเขาจะไม่ยอมรับคนนอก",
						"hindi": "प्राचीन संरक्षक वहाँ सो रहे हैं। वे बाहरी लोगों को बर्दाश्त नहीं करेंगे।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kasai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "성소 깊은 곳. 차가운 바람이 불어왔다. 모래의 움직임이 심상치 않았다.",
						"english": "Deep within the sanctuary. A cold wind blew. The sand stirred ominously.",
						"japanese": "聖域の奥深く。冷たい風が吹き荒れた。砂の動きが尋常ではなかった。",
						"chinese": "圣所深处。寒风凛冽。沙子异动不安。",
						"french": "Au plus profond du sanctuaire. Un vent froid soufflait. Le sable s'agitait étrangement.",
						"spanish": "En lo profundo del santuario. Un viento frío soplaba. La arena se movía de forma inquietante.",
						"vietnamese": "Sâu thẳm trong thánh địa. Một làn gió lạnh thổi qua. Cát chuyển động bất thường.",
						"thai": "ลึกเข้าไปในวิหาร. ลมเย็นพัดผ่านมา. ทรายเคลื่อนไหวอย่างผิดปกติ.",
						"hindi": "गर्भगृह के भीतर गहरे. एक ठंडी हवा चली. रेत की हलचल अशुभ थी."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "느껴져요? 땅이 울고 있어요. 그들이… 깨어나고 있어요.",
						"english": "Do you feel it? The ground is weeping. They... are awakening.",
						"japanese": "感じますか？大地が泣いています。彼らが…目覚めようとしています。",
						"chinese": "感觉到了吗？大地在哭泣。他们…正在苏醒。",
						"french": "Le sentez-vous ? La terre pleure. Ils... s'éveillent.",
						"spanish": "¿Lo sientes? La tierra está llorando. Ellos... están despertando.",
						"vietnamese": "Cảm thấy không? Đất đang khóc. Họ... đang thức tỉnh.",
						"thai": "รู้สึกไหม? พื้นดินกำลังร้องไห้. พวกเขา…กำลังตื่นขึ้นมา.",
						"hindi": "क्या आपको महसूस हो रहा है? धरती रो रही है. वे… जाग रहे हैं."
					},
					"type": "speech",
					"speaker": "kasai",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 모래 정령들인가요?",
						"english": "Are these... Sand Spirits?",
						"japanese": "これらは…砂の精霊ですか？",
						"chinese": "这些是…沙之精灵吗？",
						"french": "Ce sont... des Esprits des Sables ?",
						"spanish": "¿Son estos... Espíritus de Arena?",
						"vietnamese": "Đây là... Linh hồn Cát ư?",
						"thai": "นี่…วิญญาณทรายหรือเปล่า?",
						"hindi": "क्या ये… रेत की आत्माएँ हैं?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "맹세에 묶인 자들이에요. 오아시스의 비밀을 지키기 위해…",
						"english": "They are bound by an oath. To protect the secrets of the oasis...",
						"japanese": "彼らは誓約に縛られています。オアシスの秘密を守るために…",
						"chinese": "他们受誓言束缚。为了守护绿洲的秘密…",
						"french": "Ils sont liés par un serment. Pour protéger les secrets de l'oasis...",
						"spanish": "Están atados por un juramento. Para proteger los secretos del oasis...",
						"vietnamese": "Họ bị ràng buộc bởi lời thề. Để bảo vệ bí mật của ốc đảo...",
						"thai": "พวกเขาถูกผูกมัดด้วยคำสาบาน. เพื่อปกป้องความลับของโอเอซิส...",
						"hindi": "वे एक शपथ से बंधे हैं. नखलिस्तान के रहस्यों की रक्षा के लिए..."
					},
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없겠어! 전투를 준비해!",
						"english": "We can't stop them! Prepare for battle!",
						"japanese": "止められない！戦闘準備！",
						"chinese": "无法阻止！准备战斗！",
						"french": "On ne peut pas les arrêter ! Préparez-vous au combat !",
						"spanish": "¡No podremos detenerlos! ¡Preparen la batalla!",
						"vietnamese": "Không thể ngăn cản! Chuẩn bị chiến đấu!",
						"thai": "หยุดพวกเขาไม่ได้แล้ว! เตรียมพร้อมสำหรับการต่อสู้!",
						"hindi": "हम उन्हें रोक नहीं सकते! युद्ध के लिए तैयार हो जाओ!"
					},
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 맹세를 거스를 순 없다.",
						"english": "Fools... You cannot defy the oath.",
						"japanese": "愚か者ども… 誓いに逆らうことはできぬ。",
						"chinese": "愚蠢的凡人… 你们无法违抗誓言。",
						"french": "Insensés... Vous ne pouvez pas défier le serment.",
						"spanish": "Necios... No podéis desafiar el juramento.",
						"vietnamese": "Lũ ngu ngốc... Các ngươi không thể chống lại lời thề.",
						"thai": "พวกโง่... เจ้าไม่อาจขัดขืนคำสาบานได้",
						"hindi": "मूर्खों... तुम शपथ का उल्लंघन नहीं कर सकते।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장! 여기서 포기할 순 없어! 다시…!",
						"english": "Damn it! I can't give up here! Again...!",
						"japanese": "くそっ！ここで諦めるわけにはいかない！もう一度…！",
						"chinese": "可恶！不能在这里放弃！再来一次…！",
						"french": "Mince ! Je ne peux pas abandonner ici ! Encore une fois... !",
						"spanish": "¡Maldita sea! ¡No puedo rendirme aquí! ¡De nuevo...!",
						"vietnamese": "Chết tiệt! Không thể bỏ cuộc ở đây! Lại...!",
						"thai": "บ้าจริง! ฉันจะยอมแพ้ที่นี่ไม่ได้! อีกครั้ง...!",
						"hindi": "धिक्कार है! मैं यहाँ हार नहीं मान सकता! फिर से...!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "성소의 가장 깊은 곳. 거대한 모래폭풍이 형체를 이루었다.",
						"english": "The deepest part of the sanctuary. A massive sandstorm took form.",
						"japanese": "聖域の最も深い場所。巨大な砂嵐が形を成した。",
						"chinese": "圣所最深处。一场巨大的沙尘暴形成了。",
						"french": "La partie la plus profonde du sanctuaire. Une gigantesque tempête de sable prit forme.",
						"spanish": "La parte más profunda del santuario. Una tormenta de arena masiva tomó forma.",
						"vietnamese": "Nơi sâu thẳm nhất của thánh địa. Một cơn bão cát khổng lồ đã thành hình.",
						"thai": "ส่วนที่ลึกที่สุดของวิหาร. พายุทรายขนาดมหึมาได้ก่อตัวขึ้น.",
						"hindi": "गर्भगृह का सबसे गहरा भाग. एक विशाल रेतीला तूफान आकार ले रहा था."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "침입자들… 맹세는 깨뜨릴 수 없다.",
						"english": "Intruders... The oath cannot be broken.",
						"japanese": "侵入者たち…誓約は破れない。",
						"chinese": "入侵者…誓言不可破。",
						"french": "Intrus... Le serment ne peut être brisé.",
						"spanish": "Intrusos... El juramento no puede romperse.",
						"vietnamese": "Kẻ xâm nhập... Lời thề không thể phá vỡ.",
						"thai": "ผู้บุกรุก…คำสาบานไม่อาจถูกทำลายได้.",
						"hindi": "घुसपैठिए... शपथ तोड़ी नहीं जा सकती."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이 그림자 수호자인가요? 우리는 진실을 알러 왔어요.",
						"english": "Are you the Shadow Guardian? We came for the truth.",
						"japanese": "あなたが影の守護者ですか？私たちは真実を知るために来ました。",
						"chinese": "你是暗影守护者吗？我们是为了真相而来。",
						"french": "Êtes-vous le Gardien des Ombres ? Nous sommes venus pour la vérité.",
						"spanish": "¿Eres el Guardián de las Sombras? Hemos venido por la verdad.",
						"vietnamese": "Ngươi là Người bảo vệ Bóng tối? Chúng ta đến để tìm sự thật.",
						"thai": "ท่านคือผู้พิทักษ์เงาหรือ? เรามาเพื่อตามหาความจริง.",
						"hindi": "क्या आप छाया संरक्षक हैं? हम सत्य जानने आए हैं."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다. 이 이상은… 나아갈 수 없다.",
						"english": "The truth... you cannot bear. Beyond this point... you cannot proceed.",
						"japanese": "真実は…お前たちには耐えられないだろう。これ以上は…進めない。",
						"chinese": "真相…你们无法承受。此地…止步。",
						"french": "La vérité... vous ne pourrez la supporter. Au-delà de ce point... vous ne pouvez avancer.",
						"spanish": "La verdad... no podréis soportarla. Más allá de este punto... no podéis avanzar.",
						"vietnamese": "Sự thật... các ngươi không thể chịu đựng được. Vượt quá điểm này... các ngươi không thể tiến xa hơn.",
						"thai": "ความจริง…พวกเจ้าจะทนไม่ได้. เกินกว่านี้…เจ้าไม่อาจก้าวต่อไปได้.",
						"hindi": "सत्य… तुम सह नहीं पाओगे. इस बिंदु से आगे… तुम बढ़ नहीं सकते."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "kasai",
					"content": {
						"korean": "어서 싸워요! 저들이 울부짖는 오아시스를 영원히 봉인할 거예요!",
						"english": "Fight now! They will seal the weeping oasis forever!",
						"japanese": "さあ、戦うんだ！彼らが泣き叫ぶオアシスを永遠に封印するぞ！",
						"chinese": "快战斗！他们会永远封印这哭泣的绿洲！",
						"french": "Battons-nous ! Ils vont sceller l'oasis en pleurs pour toujours !",
						"spanish": "¡A luchar! ¡Ellos sellarán el oasis lloroso para siempre!",
						"vietnamese": "Chiến đấu ngay! Họ sẽ phong ấn ốc đảo đang khóc vĩnh viễn!",
						"thai": "สู้เลย! พวกเขาจะผนึกโอเอซิสที่กำลังร่ำไห้ตลอดไป!",
						"hindi": "अभी लड़ो! वे रोते हुए नखलिस्तान को हमेशा के लिए सील कर देंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크아아악… 맹세는… 죽지 않는다… 한 방울의 슬픔은… 영원히…",
						"english": "Gaaah... The oath... never dies... A single tear... forever...",
						"japanese": "クアアアアク… 誓いは… 死なぬ… 一滴の悲しみは… 永遠に…",
						"chinese": "啊啊啊啊… 誓言… 不会消亡… 一滴悲伤… 永恒…",
						"french": "Grrraaaah... Le serment... ne meurt jamais... Une goutte de tristesse... pour toujours...",
						"spanish": "Grrraaaah... El juramento... nunca muere... Una gota de tristeza... para siempre...",
						"vietnamese": "Kaaah... Lời thề... không chết... Một giọt buồn... vĩnh cửu...",
						"thai": "ครืนนน... คำสาบาน... ไม่ตาย... น้ำตาหยดหนึ่ง... ชั่วนิรันดร์...",
						"hindi": "आह... शपथ... मरती नहीं... एक बूंद आँसू... हमेशा के लिए..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸어… 하지만….",
						"english": "We defeated it... but...",
						"japanese": "倒した… しかし…",
						"chinese": "我们击败了它… 但是…",
						"french": "Nous l'avons vaincu... mais...",
						"spanish": "Lo derrotamos... pero...",
						"vietnamese": "Đã đánh bại... nhưng...",
						"thai": "เราโค่นมันได้แล้ว... แต่ว่า...",
						"hindi": "हमने उसे हरा दिया... लेकिन..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kasai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이것은 끝이 아니에요. 맹세의 그림자는 더 깊은 곳에…",
						"english": "This isn't the end. The shadow of the oath lies deeper...",
						"japanese": "これは終わりじゃない。誓いの影はもっと深い場所に…",
						"chinese": "这并非结束。誓言的阴影潜藏得更深…",
						"french": "Ce n'est pas la fin. L'ombre du serment réside plus profondément...",
						"spanish": "Este no es el final. La sombra del juramento yace en lo más profundo...",
						"vietnamese": "Đây không phải là kết thúc. Bóng tối của lời thề nằm sâu hơn nữa...",
						"thai": "นี่ไม่ใช่จุดจบ เงาของคำสาบานยังซ่อนอยู่ในที่ลึกกว่านั้น...",
						"hindi": "यह अंत नहीं है। शपथ की छाया और गहराई में है..."
					},
					"type": "speech",
					"speaker": "kasai"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "모래 수호자를 쓰러뜨렸지만, '울부짖는 오아시스'의 진실은 더욱 깊은 미스터리 속으로 가라앉았다. 다음 단서를 향해.",
						"english": "We defeated the Sand Guardian, but the truth of the 'Howling Oasis' sank into an even deeper mystery. Towards the next clue.",
						"japanese": "砂の守護者を倒したが、「叫びのオアシス」の真実はさらなる深き謎へと沈んだ。次の手がかりを求めて。",
						"chinese": "我们击败了沙之守护者，但“嚎叫绿洲”的真相却沉入了更深的谜团。向着下一个线索进发。",
						"french": "Nous avons vaincu le Gardien des Sables, mais la vérité de l'« Oasis Hurlante » a sombré dans un mystère encore plus profond. Vers l'indice suivant.",
						"spanish": "Derrotamos al Guardián de Arena, pero la verdad del 'Oasis Aullante' se hundió en un misterio aún más profundo. Hacia la siguiente pista.",
						"vietnamese": "Đã đánh bại Kẻ bảo vệ Cát, nhưng sự thật về 'Ốc đảo Hú' lại chìm sâu vào một bí ẩn lớn hơn. Hướng tới manh mối tiếp theo.",
						"thai": "เราโค่นผู้พิทักษ์ทรายลงได้แล้ว แต่ความจริงของ 'โอเอซิสคร่ำครวญ' กลับจมดิ่งลงสู่ปริศนาที่ลึกยิ่งกว่า มุ่งหน้าสู่เบาะแสต่อไป",
						"hindi": "हमने रेत के संरक्षक को हरा दिया, लेकिन 'गरजते नखलिस्तान' का सच और भी गहरे रहस्य में डूब गया। अगले सुराग की ओर।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 사막, 뜨거운 모래 위로 또 한 번의 발걸음.",
			"전설 속 '울부짖는 오아시스'의 진실은 모래 속에 잠들어 있었다.",
			"고대 부족의 후예 '카사이'. 그녀는 잊혀진 맹세의 그림자를 알고 있었다.",
			"그리고 그 그림자 속에는, 한 방울의 슬픔이 영원히 지켜지고 있었다."
		],
		"english": [
			"Endless desert, another step on the hot sand.",
			"The truth of the legendary 'Crying Oasis' lay dormant in the sand.",
			"Kasai, a descendant of an ancient tribe. She knew the shadow of a forgotten vow.",
			"And within that shadow, a single drop of sorrow was eternally guarded."
		],
		"japanese": [
			"終わらない砂漠、熱い砂の上にまた一歩。",
			"伝説の「叫びのオアシス」の真実は、砂の中に眠っていた。",
			"古代部族の末裔「カサイ」。彼女は忘れられた誓いの影を知っていた。",
			"そしてその影の中では、一滴の悲しみが永遠に守られていた。"
		],
		"chinese": [
			"无尽的沙漠，炎热的沙滩上又一步。",
			"传说中“呜咽绿洲”的真相，沉睡在沙中。",
			"古代部落的后裔“卡赛”。她知晓被遗忘誓言的阴影。",
			"而在那阴影中，一滴悲伤被永远守护着。"
		],
		"french": [
			"Désert sans fin, un nouveau pas sur le sable brûlant.",
			"La vérité de la légendaire \"Oasis Hurlante\" reposait enfouie dans le sable.",
			"Kasai, descendante d'une ancienne tribu. Elle connaissait l'ombre d'un serment oublié.",
			"Et dans cette ombre, une goutte de tristesse était éternellement gardée."
		],
		"spanish": [
			"Desierto interminable, otro paso sobre la arena ardiente.",
			"La verdad del legendario \"Oasis Llorón\" dormía en la arena.",
			"Kasai, descendiente de una antigua tribu. Ella conocía la sombra de un juramento olvidado.",
			"Y en esa sombra, una gota de tristeza era custodiada eternamente."
		],
		"vietnamese": [
			"Sa mạc vô tận, một bước chân nữa trên cát nóng.",
			"Sự thật về 'Ốc đảo Khóc Than' trong truyền thuyết đã ngủ vùi trong cát.",
			"Kasai, hậu duệ của bộ lạc cổ đại. Cô biết về bóng tối của một lời thề bị lãng quên.",
			"Và trong bóng tối đó, một giọt buồn đã được gìn giữ mãi mãi."
		],
		"thai": [
			"ทะเลทรายไร้ที่สิ้นสุด อีกก้าวหนึ่งบนผืนทรายร้อนระอุ",
			"ความจริงของ 'โอเอซิสรำพัน' ในตำนานหลับใหลอยู่ในผืนทราย",
			"คาไซ ผู้สืบเชื้อสายจากชนเผ่าโบราณ เธอรู้ถึงเงาของคำสาบานที่ถูกลืม",
			"และในเงานั้น หยดน้ำตาแห่งความเศร้าหนึ่งหยดถูกเฝ้ารักษาไว้ชั่วนิรันดร์"
		],
		"hindi": [
			"अंतहीन रेगिस्तान, गर्म रेत पर एक और कदम।",
			"पौराणिक 'चीख़ने वाले नखलिस्तान' का सच रेत में सोया हुआ था।",
			"प्राचीन जनजाति की वंशज 'कसाई'। वह भूले हुए वचन की छाया जानती थी।",
			"और उस छाया में, दुःख की एक बूँद हमेशा के लिए पहरा दे रही थी।"
		]
	}
} as const;
