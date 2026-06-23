export const scenario_modern_cipherpact_31_03 = {
	"scenario_id": "modern_cipherpact_31_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"emotion": "base",
					"content": {
						"korean": "고대 조직의 흔적이 남은 폐허가 된 연구 시설. 침묵만이 흐른다.",
						"english": "A ruined research facility, bearing traces of an ancient organization. Only silence prevails.",
						"japanese": "古代組織の痕跡が残る廃墟となった研究施設。ただ沈黙が流れる。",
						"chinese": "一座废弃的研究设施，残留着古老组织的痕迹。唯有沉默。",
						"french": "Un centre de recherche en ruines, portant les traces d'une ancienne organisation. Seul le silence règne.",
						"spanish": "Una instalación de investigación en ruinas, con rastros de una antigua organización. Solo el silencio impera.",
						"vietnamese": "Một cơ sở nghiên cứu đổ nát, mang dấu vết của một tổ chức cổ đại. Chỉ có sự im lặng.",
						"thai": "สถานีวิจัยที่ถูกทำลายทิ้งไว้พร้อมร่องรอยขององค์กรโบราณ ความเงียบเท่านั้นที่แผ่ซ่าน",
						"hindi": "एक खंडहर अनुसंधान सुविधा, जिसमें एक प्राचीन संगठन के निशान बाकी हैं। केवल खामोशी छाई हुई है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가 그 연구 시설인가….",
						"english": "Is this… that research facility…?",
						"japanese": "ここが…あの研究施設か…？",
						"chinese": "这里就是…那个研究设施吗…？",
						"french": "C'est ça… ce centre de recherche… ?",
						"spanish": "¿Es este… ese centro de investigación…?",
						"vietnamese": "Đây là… cơ sở nghiên cứu đó sao…?",
						"thai": "ที่นี่คือ... สถานีวิจัยนั้นเหรอ...?",
						"hindi": "क्या यह… वही अनुसंधान सुविधा है…?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "안 돼! 또 실패야! 왜… 왜 반복되는 거야!",
						"english": "No! Another failure! Why… why does it keep repeating?!",
						"japanese": "ダメだ！また失敗だ！なぜ…なぜ繰り返されるんだ！",
						"chinese": "不！又失败了！为什么…为什么会一再重复！",
						"french": "Non ! Encore un échec ! Pourquoi… pourquoi ça se répète sans cesse !",
						"spanish": "¡No! ¡Otro fracaso! ¿Por qué… por qué se repite una y otra vez?",
						"vietnamese": "Không! Lại thất bại nữa rồi! Tại sao… tại sao cứ lặp đi lặp lại thế này!",
						"thai": "ไม่! ล้มเหลวอีกแล้ว! ทำไม… ทำไมมันถึงซ้ำซาก!",
						"hindi": "नहीं! फिर से विफलता! क्यों… क्यों यह बार-बार हो रहा है!"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…누구지?",
						"english": "…Who's there?",
						"japanese": "…誰だ？",
						"chinese": "…是谁？",
						"french": "…Qui est là ?",
						"spanish": "…¿Quién es?",
						"vietnamese": "…Ai đó?",
						"thai": "...ใครน่ะ?",
						"hindi": "…कौन है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "데이터는 완벽해… 그런데 왜 결과는 항상…!",
						"english": "The data is perfect… but why are the results always…!",
						"japanese": "データは完璧だ…なのにどうして結果はいつも…！",
						"chinese": "数据是完美的…但为什么结果总是…！",
						"french": "Les données sont parfaites… mais pourquoi les résultats sont-ils toujours…!",
						"spanish": "Los datos son perfectos… pero ¿por qué los resultados siempre…!",
						"vietnamese": "Dữ liệu hoàn hảo… nhưng tại sao kết quả luôn…!",
						"thai": "ข้อมูลสมบูรณ์แบบ… แต่ทำไมผลลัพธ์ถึงเป็นแบบนี้เสมอ…!",
						"hindi": "डेटा सही है… लेकिन परिणाम हमेशा क्यों…!"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 모든 게 제자리야. 아무것도 변하지 않아….",
						"english": "In the end, everything is back to square one. Nothing ever changes….",
						"japanese": "結局、全てが元通りだ。何も変わらない…。",
						"chinese": "到头来，一切都回到了原点。什么都没有改变…。",
						"french": "Au final, tout est revenu au point de départ. Rien ne change jamais….",
						"spanish": "Al final, todo vuelve al mismo punto. Nada cambia jamás….",
						"vietnamese": "Cuối cùng, mọi thứ lại trở về như cũ. Chẳng có gì thay đổi cả….",
						"thai": "ในที่สุด ทุกอย่างก็กลับไปที่เดิม ไม่มีอะไรเปลี่ยนแปลงเลย…",
						"hindi": "अंत में, सब कुछ वहीं का वहीं है। कुछ भी नहीं बदलता…।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭘 연구하는 거죠?",
						"english": "What are you researching?",
						"japanese": "何を研究しているのですか？",
						"chinese": "您在研究什么？",
						"french": "Que recherchez-vous ?",
						"spanish": "¿Qué está investigando?",
						"vietnamese": "Anh đang nghiên cứu gì vậy?",
						"thai": "คุณกำลังวิจัยอะไรอยู่?",
						"hindi": "आप क्या शोध कर रहे हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "파괴된 서약을 복구하는 방법. 하지만… 실패했어. 수없이 실패했어.",
						"english": "How to restore a shattered vow. But... I failed. Countless times.",
						"japanese": "破られた誓いを修復する方法。だが…失敗した。幾度となく失敗した。",
						"chinese": "如何修复被破坏的誓约。但是…我失败了。无数次失败了。",
						"french": "Comment restaurer un vœu brisé. Mais… j'ai échoué. Innombrables fois.",
						"spanish": "Cómo restaurar un voto roto. Pero… fallé. Innumerables veces.",
						"vietnamese": "Cách khôi phục một lời thề đã tan vỡ. Nhưng… tôi đã thất bại. Vô số lần.",
						"thai": "วิธีฟื้นฟูคำสาบานที่พังทลาย แต่…ฉันล้มเหลว ล้มเหลวมานับครั้งไม่ถ้วน",
						"hindi": "एक टूटी हुई प्रतिज्ञा को कैसे बहाल करें। लेकिन… मैं विफल रहा। अनगिनत बार।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "저희도 진실을 찾고 있어요.",
						"english": "We're also searching for the truth.",
						"japanese": "私たちも真実を探しています。",
						"chinese": "我们也在寻找真相。",
						"french": "Nous cherchons aussi la vérité.",
						"spanish": "Nosotros también buscamos la verdad.",
						"vietnamese": "Chúng tôi cũng đang tìm kiếm sự thật.",
						"thai": "พวกเราก็กำลังตามหาความจริงอยู่เหมือนกัน",
						"hindi": "हम भी सच की तलाश में हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "진실? 진실은 결국 또 다른 실패를 낳을 뿐이야. 모든 것이 반복될 뿐.",
						"english": "Truth? Truth only leads to another failure. Everything just repeats.",
						"japanese": "真実？真実は結局、また別の失敗を生むだけだ。すべてが繰り返されるだけ。",
						"chinese": "真相？真相最终只会带来另一次失败。一切都只是重复而已。",
						"french": "La vérité ? La vérité ne mène qu'à un autre échec. Tout ne fait que se répéter.",
						"spanish": "¿La verdad? La verdad solo lleva a otro fracaso. Todo simplemente se repite.",
						"vietnamese": "Sự thật? Sự thật rốt cuộc cũng chỉ dẫn đến một thất bại khác thôi. Mọi thứ cứ lặp đi lặp lại.",
						"thai": "ความจริง? ความจริงก็แค่นำไปสู่ความล้มเหลวอีกครั้ง ทุกสิ่งแค่จะวนซ้ำไปมา",
						"hindi": "सच? सच अंततः एक और विफलता को जन्म देगा। सब कुछ बस दोहराता रहता है।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 폐허는 우리의 비극이야. 계속해서 반복되는… 지옥.",
						"english": "These ruins are our tragedy. A constantly repeating... hell.",
						"japanese": "この廃墟は私たちの悲劇だ。何度も繰り返される…地獄。",
						"chinese": "这些废墟是我们的悲剧。一个不断重复的…地狱。",
						"french": "Ces ruines sont notre tragédie. Un enfer qui se répète sans cesse.",
						"spanish": "Estas ruinas son nuestra tragedia. Un infierno que se repite constantemente.",
						"vietnamese": "Những tàn tích này là bi kịch của chúng ta. Một địa ngục lặp đi lặp lại không ngừng.",
						"thai": "ซากปรักหักพังเหล่านี้คือโศกนาฏกรรมของเรา นรกที่ซ้ำซากไม่รู้จบ",
						"hindi": "ये खंडहर हमारी त्रासदी हैं। एक लगातार दोहराया जाने वाला… नरक।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼… 여기 있는 건 뭐죠?",
						"english": "Then... what's here?",
						"japanese": "では…ここにあるものは？",
						"chinese": "那么…这里有什么？",
						"french": "Alors… qu'y a-t-il ici ?",
						"spanish": "Entonces… ¿qué hay aquí?",
						"vietnamese": "Vậy… ở đây có gì?",
						"thai": "แล้ว…ที่นี่มีอะไรบ้าง?",
						"hindi": "तो… यहाँ क्या है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "실험의 잔재. 실패의 결과물… 더 이상 앞으로 갈 수 없어. 갇힌 거야.",
						"english": "Remains of an experiment. The outcome of failure… Can't move forward anymore. Trapped.",
						"japanese": "実験の残骸。失敗の結果…もう前に進めない。閉じ込められたんだ。",
						"chinese": "实验的残骸。失败的产物…无法再向前了。被困住了。",
						"french": "Les vestiges d'une expérience. Le résultat de l'échec… Impossible d'avancer. Piégé.",
						"spanish": "Restos de un experimento. El resultado del fracaso… Ya no se puede avanzar. Atrapados.",
						"vietnamese": "Tàn dư của một thí nghiệm. Kết quả của thất bại… Không thể tiến lên được nữa. Bị mắc kẹt rồi.",
						"thai": "ซากของการทดลอง ผลลัพธ์ของความล้มเหลว…ไปต่อไม่ได้แล้ว ติดกับดัก",
						"hindi": "एक प्रयोग के अवशेष। विफलता का परिणाम… अब और आगे नहीं बढ़ सकते। फँस गए।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저희는 멈추지 않을 거예요.",
						"english": "We won't stop.",
						"japanese": "私たちは止まりません。",
						"chinese": "我们不会停止的。",
						"french": "Nous n'arrêterons pas.",
						"spanish": "No nos detendremos.",
						"vietnamese": "Chúng tôi sẽ không dừng lại.",
						"thai": "เราจะไม่หยุด",
						"hindi": "हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하… 너희도 결국… 같은 비극에 갇히게 될 거야.",
						"english": "Hah… You'll also eventually… be trapped in the same tragedy.",
						"japanese": "はぁ…お前たちも結局…同じ悲劇に囚われることになるだろう。",
						"chinese": "哈…你们最终也…会被困在同样的悲剧中。",
						"french": "Ha… Vous aussi finirez par… être piégés dans la même tragédie.",
						"spanish": "Ja… Vosotros también, al final… quedaréis atrapados en la misma tragedia.",
						"vietnamese": "Ha… Cuối cùng các ngươi cũng sẽ… bị mắc kẹt trong cùng một bi kịch thôi.",
						"thai": "ฮ่า…ในที่สุดพวกเจ้าก็จะต้อง…ติดอยู่ในโศกนาฏกรรมเดียวกัน",
						"hindi": "हा… तुम भी अंततः… उसी त्रासदी में फँस जाओगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "보지 마… 더 깊이 들어가면 안 돼. 모든 게 끝없이 반복될 뿐이야.",
						"english": "Don't look… Don't go deeper. Everything just endlessly repeats.",
						"japanese": "見るな…これ以上深く入るな。すべてが際限なく繰り返されるだけだ。",
						"chinese": "别看…别再深入了。一切都只是无止境地重复着。",
						"french": "Ne regarde pas… N'allez pas plus loin. Tout ne fait que se répéter sans fin.",
						"spanish": "No mires… No vayas más profundo. Todo se repite sin cesar.",
						"vietnamese": "Đừng nhìn… Đừng đi sâu hơn nữa. Mọi thứ chỉ lặp đi lặp lại không ngừng.",
						"thai": "อย่ามอง…อย่าเข้าไปลึกกว่านี้ ทุกสิ่งแค่จะวนซ้ำไปไม่รู้จบ",
						"hindi": "देखो मत… और गहरा मत जाओ। सब कुछ बस अंतहीन रूप से दोहराता रहता है।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그래도… 저희는 이 고리를 끊을 거예요.",
						"english": "Still... we will break this cycle.",
						"japanese": "それでも…私たちはこの輪を断ち切ります。",
						"chinese": "即使如此…我们也会打破这个循环。",
						"french": "Pourtant... nous briserons ce cycle.",
						"spanish": "Aun así... romperemos este ciclo.",
						"vietnamese": "Dù vậy… chúng tôi sẽ phá vỡ vòng lặp này.",
						"thai": "ถึงอย่างนั้น... พวกเราจะทำลายวงจรนี้",
						"hindi": "फिर भी… हम इस चक्र को तोड़ेंगे।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무의미해… 모든 게… 무의미해…!",
						"english": "Meaningless... Everything... is meaningless...!",
						"japanese": "無意味だ…全てが…無意味だ…！",
						"chinese": "毫无意义…一切都…毫无意义…！",
						"french": "Dénué de sens... Tout est... dénué de sens...!",
						"spanish": "Sin sentido... Todo... no tiene sentido...!",
						"vietnamese": "Vô nghĩa… Tất cả… đều vô nghĩa…!",
						"thai": "ไร้ความหมาย... ทุกสิ่ง... ไร้ความหมาย...!",
						"hindi": "व्यर्थ है… सब कुछ… व्यर्थ है…!"
					},
					"emotion": "angry",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"type": "direction"
				},
				{
					"content": {
						"korean": "린의 절규가 메아리쳤다. 탐험대는 더 깊은 곳으로 향했다.",
						"english": "Lynn's scream echoed. The expedition team ventured deeper.",
						"japanese": "リンの叫びがこだました。探検隊はさらに奥深くへと進んだ。",
						"chinese": "琳的尖叫声回荡着。探险队向更深处进发。",
						"french": "Le cri de Lynn résonna. L'équipe d'expédition s'enfonça plus profondément.",
						"spanish": "El grito de Lynn resonó. El equipo de expedición se adentró más.",
						"vietnamese": "Tiếng thét của Lynn vang vọng. Đoàn thám hiểm tiến sâu hơn.",
						"thai": "เสียงกรีดร้องของลินน์สะท้อนก้อง ทีมสำรวจมุ่งหน้าสู่ส่วนลึก",
						"hindi": "लिन की चीख गूंज उठी। अन्वेषण दल और गहराई में चला गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하… 하하… 결국… 아무것도 바뀌지 않아…!",
						"english": "Ha... Hahaha... In the end... nothing changes...!",
						"japanese": "ハ…ハハ…結局…何も変わらない…！",
						"chinese": "哈…哈哈…终究…什么都不会改变…！",
						"french": "Ha... Hahaha... Au final... rien ne change...!",
						"spanish": "Ja... Jajaja... Al final... nada cambia...!",
						"vietnamese": "Ha… Hahaha… Cuối cùng… chẳng có gì thay đổi cả…!",
						"thai": "ฮ่า... ฮ่าฮ่า... สุดท้ายแล้ว... ไม่มีอะไรเปลี่ยนแปลง...!",
						"hindi": "हा… हाहा… अंत में… कुछ भी नहीं बदलता…!"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이겼는데, 왜 이렇게 허무하지.",
						"english": "...We won, but why does it feel so empty?",
						"japanese": "…勝ったのに、なぜこんなに虚しいんだ。",
						"chinese": "…明明赢了，为什么如此空虚。",
						"french": "...Nous avons gagné, mais pourquoi est-ce si vide ?",
						"spanish": "...Ganamos, pero ¿por qué se siente tan vacío?",
						"vietnamese": "…Thắng rồi, nhưng sao lại trống rỗng thế này.",
						"thai": "…ชนะแล้วแท้ๆ ทำไมถึงรู้สึกว่างเปล่าแบบนี้",
						"hindi": "…जीत गए, पर इतना खालीपन क्यों है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "린의 말이… 틀리지 않은 건가.",
						"english": "Lynn's words... were they not wrong?",
						"japanese": "リンの言葉が…間違っていなかったのか。",
						"chinese": "琳的话…难道没错吗。",
						"french": "Les paroles de Lynn... n'étaient-elles pas fausses ?",
						"spanish": "¿Las palabras de Lynn... no estaban equivocadas?",
						"vietnamese": "Lời của Lynn… chẳng lẽ không sai sao.",
						"thai": "คำพูดของลินน์... ไม่ผิดหรือนี่",
						"hindi": "लिन की बातें… क्या गलत नहीं थीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 짙은 허무감이 탐험대를 감쌌다. 비극은 계속 메아리쳤다.",
						"english": "Victory, yet a profound emptiness enveloped the expedition. The tragedy continued to echo.",
						"japanese": "勝利したが、深い虚無感が探検隊を包んだ。悲劇は響き続けた。",
						"chinese": "虽获胜利，但深沉的虚无感笼罩了探险队。悲剧持续回响。",
						"french": "La victoire, mais un vide profond enveloppa l'expédition. La tragédie continuait de résonner.",
						"spanish": "Victoria, sin embargo, un profundo vacío envolvió a la expedición. La tragedia siguió resonando.",
						"vietnamese": "Chiến thắng, nhưng một cảm giác trống rỗng sâu sắc bao trùm đoàn thám hiểm. Bi kịch vẫn tiếp tục vang vọng.",
						"thai": "ชัยชนะ ทว่าความว่างเปล่าอันลึกซึ้งห่อหุ้มคณะสำรวจ โศกนาฏกรรมยังคงก้องกังวาน",
						"hindi": "विजय मिली, फिर भी एक गहरा शून्य अभियान दल को घेर गया। त्रासदी गूँजती रही।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폐허의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "The deepest part of the ruins. A colossal shadow appeared.",
						"japanese": "廃墟の最も深い場所。巨大な影が現れた。",
						"chinese": "废墟最深处。一个巨大的影子出现了。",
						"french": "La partie la plus profonde des ruines. Une ombre colossale apparut.",
						"spanish": "La parte más profunda de las ruinas. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu nhất của phế tích. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ส่วนลึกที่สุดของซากปรักหักพัง เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "खंडहरों का सबसे गहरा हिस्सा। एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 여기까지 왔지? 모든 시도는 결국 실패로 돌아갈 뿐인데.",
						"english": "Why have you come this far? Every attempt ultimately ends in failure.",
						"japanese": "なぜここまで来た？全ての試みは結局失敗に終わるだけだ。",
						"chinese": "为何来到这里？所有尝试终将以失败告终。",
						"french": "Pourquoi êtes-vous venus si loin ? Chaque tentative ne mène qu'à l'échec.",
						"spanish": "¿Por qué habéis llegado tan lejos? Todos los intentos terminan en fracaso.",
						"vietnamese": "Sao ngươi lại đến tận đây? Mọi nỗ lực cuối cùng cũng chỉ dẫn đến thất bại thôi.",
						"thai": "ทำไมถึงมาได้ไกลขนาดนี้? ทุกความพยายามสุดท้ายก็จบลงด้วยความล้มเหลวเท่านั้น",
						"hindi": "तुम इतनी दूर क्यों आए? हर कोशिश अंततः विफलता में ही समाप्त होती है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 그 실패의 결과물인가?",
						"english": "Are you the result of that failure?",
						"japanese": "お前はその失敗の産物か？",
						"chinese": "你是那失败的产物吗？",
						"french": "Es-tu le résultat de cet échec ?",
						"spanish": "¿Eres el resultado de ese fracaso?",
						"vietnamese": "Ngươi là kết quả của thất bại đó sao?",
						"thai": "เจ้าคือผลลัพธ์ของความล้มเหลวนั้นหรือ?",
						"hindi": "क्या तुम उस विफलता का परिणाम हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 질문. 너희도 곧 알게 될 거다. 이 끝없는 비극을.",
						"english": "Foolish question. You too will soon know this endless tragedy.",
						"japanese": "愚かな問い。お前たちもすぐに知ることになるだろう。この終わりのない悲劇を。",
						"chinese": "愚蠢的问题。你们也很快就会明白。这无尽的悲剧。",
						"french": "Question stupide. Vous aussi, vous connaîtrez bientôt cette tragédie sans fin.",
						"spanish": "Pregunta estúpida. Vosotros también conoceréis pronto esta tragedia sin fin.",
						"vietnamese": "Câu hỏi ngớ ngẩn. Các ngươi cũng sẽ sớm nhận ra thôi. Bi kịch bất tận này.",
						"thai": "คำถามโง่เง่า เจ้าก็จะรู้ในไม่ช้าถึงโศกนาฏกรรมอันไม่สิ้นสุดนี้",
						"hindi": "मूर्खतापूर्ण प्रश्न। तुम भी जल्द ही इस अंतहीन त्रासदी को जानोगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 힘에 압도당했다. 거대한 그림자가 그들을 삼켰다.",
						"english": "Overwhelmed by an unknown force. A colossal shadow swallowed them.",
						"japanese": "正体不明の力に圧倒された。巨大な影が彼らを飲み込んだ。",
						"chinese": "被一股不明力量所压倒。一道巨大的阴影吞噬了他们。",
						"french": "Submergés par une force inconnue. Une ombre colossale les engloutit.",
						"spanish": "Abatidos por una fuerza desconocida. Una sombra colosal los devoró.",
						"vietnamese": "Bị áp đảo bởi một thế lực vô danh. Một cái bóng khổng lồ đã nuốt chửng họ.",
						"thai": "ถูกครอบงำด้วยพลังที่ไม่รู้จัก เงาขนาดมหึมากลืนกินพวกเขา",
						"hindi": "एक अज्ञात शक्ति से अभिभूत। एक विशाल छाया ने उन्हें निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "봐라. 너희의 모든 노력은 결국 이 비극에 갇히게 될 뿐이다.",
						"english": "Behold. All your efforts will ultimately be trapped within this tragedy.",
						"japanese": "見よ。お前たちの全ての努力は結局、この悲劇に閉じ込められるだけだ。",
						"chinese": "看吧。你们所有的努力终将困于这场悲剧之中。",
						"french": "Regardez. Tous vos efforts seront finalement piégés dans cette tragédie.",
						"spanish": "Mirad. Todos vuestros esfuerzos quedarán finalmente atrapados en esta tragedia.",
						"vietnamese": "Hãy nhìn xem. Mọi nỗ lực của các ngươi cuối cùng sẽ bị mắc kẹt trong bi kịch này.",
						"thai": "ดูสิ ความพยายามทั้งหมดของพวกเจ้าจะถูกจองจำอยู่ในโศกนาฏกรรมนี้ในที่สุด",
						"hindi": "देखो। तुम्हारे सभी प्रयास अंततः इस त्रासदी में फँस जाएँगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니… 우리는 멈추지 않아…!",
						"english": "No... we won't stop...!",
						"japanese": "いや…私たちは止まらない…！",
						"chinese": "不…我们不会停下…！",
						"french": "Non... nous n'arrêterons pas...!",
						"spanish": "No... no nos detendremos...!",
						"vietnamese": "Không… chúng ta sẽ không dừng lại…!",
						"thai": "ไม่… เราจะไม่หยุด…!",
						"hindi": "नहीं... हम नहीं रुकेंगे...!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둠에 잠긴 연구 시설.",
			"파괴된 잔해 속, 한 과학자가 홀로 실험을 반복했다.",
			"그녀의 절규는 과거의 실패가 아닐지, 혹은 미래의 그림자일지 모른다.",
			"진실을 좇는 발걸음은, 이 비극의 메아리 속으로 향한다."
		],
		"english": [
			"A research facility shrouded in darkness.",
			"Amidst the ruined debris, a lone scientist repeated an experiment.",
			"Her screams might not be a past failure, but a shadow of the future.",
			"Steps pursuing the truth lead into the echo of this tragedy."
		],
		"japanese": [
			"闇に包まれた研究施設。",
			"破壊された残骸の中、一人の科学者が孤独に実験を繰り返した。",
			"彼女の絶叫は、過去の失敗か、あるいは未来の影なのかもしれない。",
			"真実を追う足取りは、この悲劇の残響の中へと向かう。"
		],
		"chinese": [
			"笼罩在黑暗中的研究设施。",
			"在废墟中，一位科学家独自重复着实验。",
			"她的尖叫，或许不是过去的失败，而是未来的阴影。",
			"追寻真相的脚步，走向这场悲剧的回声之中。"
		],
		"french": [
			"Un centre de recherche plongé dans l'obscurité.",
			"Au milieu des débris, une scientifique répétait seule une expérience.",
			"Ses cris pourraient ne pas être un échec passé, mais l'ombre d'un futur.",
			"Les pas poursuivant la vérité mènent dans l'écho de cette tragédie."
		],
		"spanish": [
			"Una instalación de investigación sumida en la oscuridad.",
			"Entre los escombros destruidos, una científica repetía un experimento en soledad.",
			"Sus gritos podrían no ser un fracaso del pasado, sino la sombra del futuro.",
			"Los pasos que persiguen la verdad se dirigen al eco de esta tragedia."
		],
		"vietnamese": [
			"Một cơ sở nghiên cứu chìm trong bóng tối.",
			"Giữa đống đổ nát, một nhà khoa học đơn độc lặp đi lặp lại một thí nghiệm.",
			"Tiếng thét của cô ấy có thể không phải là thất bại trong quá khứ, mà là bóng tối của tương lai.",
			"Những bước chân theo đuổi sự thật dẫn vào tiếng vang của bi kịch này."
		],
		"thai": [
			"สถานีวิจัยที่ปกคลุมด้วยความมืดมิด",
			"ท่ามกลางซากปรักหักพัง นักวิทยาศาสตร์คนหนึ่งได้ทำการทดลองซ้ำแล้วซ้ำเล่า",
			"เสียงกรีดร้องของเธออาจไม่ใช่ความล้มเหลวในอดีต แต่อาจเป็นเงาของอนาคต",
			"ก้าวที่ตามหาความจริงนำไปสู่เสียงสะท้อนของโศกนาฏกรรมนี้"
		],
		"hindi": [
			"अंधेरे में डूबी एक अनुसंधान सुविधा।",
			"बर्बाद हुए मलबे के बीच, एक अकेली वैज्ञानिक बार-बार एक प्रयोग दोहरा रही थी।",
			"उसकी चीखें शायद अतीत की विफलता नहीं, बल्कि भविष्य की परछाई हों।",
			"सच्चाई का पीछा करते हुए कदम इस त्रासदी की गूँज में आगे बढ़ते हैं।"
		]
	}
} as const;
